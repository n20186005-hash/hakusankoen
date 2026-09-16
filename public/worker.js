// Cloudflare Worker: serves the static build (./dist) and a server-side
// cached weather endpoint backed by Open-Meteo.
// Open-Meteo requires no API key and is CORS-enabled, so the frontend can
// also fall back to a direct request if this worker is absent (e.g. local preview).

const LAT = 37.9144137;
const LNG = 139.0393424;

function buildApiUrl() {
  const params = new URLSearchParams({
    latitude: String(LAT),
    longitude: String(LNG),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset',
    hourly: 'uv_index',
    timezone: 'Asia/Tokyo',
    forecast_days: '7',
    language: 'ja',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

async function handleWeather(request, ctx) {
  const apiUrl = buildApiUrl();
  const cacheKey = new Request(apiUrl, { method: 'GET' });
  const cache = caches.default;

  let response = await cache.match(cacheKey);
  if (response) return response;

  try {
    const upstream = await fetch(apiUrl);
    const body = await upstream.text();
    response = new Response(body, {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=1800, s-maxage=1800',
        'access-control-allow-origin': '*',
      },
    });
    if (ctx && typeof ctx.waitUntil === 'function') {
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }
    return response;
  } catch (err) {
    return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') {
      return handleWeather(request, ctx);
    }
    // Serve the static Astro build for every other request.
    return env.ASSETS.fetch(request);
  },
};
