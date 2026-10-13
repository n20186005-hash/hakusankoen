export const site = {
  name: '白山公園ガイド',
  title: '白山公園（新潟市）観光ガイド｜見どころ・駐車場・アクセス・桜',
  description:
    '新潟市中央区にある白山公園の観光ガイド。ひょうたん池・空中庭園・白山神社・燕喜館の見どころをはじめ、アクセス、駐車場料金、桜の季節、散歩コースを紹介します。',
  domain: 'HakusanKoen.com',
  url: 'https://hakusankoen.com',
  address: '新潟県新潟市中央区一番堀通町地先',
  coordinates: { lat: 37.9144137, lng: 139.0393424 },
  gaId: 'G-HXM22WWPKP',
  mapsShareUrl: 'https://maps.app.goo.gl/BHrgRgwqfi9MrghV6',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.6854773952196!2d139.03934239999998!3d37.9144137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c9c040aa89bb%3A0x13b8e29a378202ee!2z55m95bGx5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1785398751784!5m2!1sja!2sjp',
  govtTourismUrl: 'https://www.city.niigata.lg.jp/',
  rating: {
    score: 4.1,
    count: 4413,
    source: 'Google Maps',
    syncDate: '2026 年 10 月',
  },
  entity: {
    fullNameEn: 'Hakusan Park',
    shortName: 'Hakusan Koen',
    cityEn: 'Niigata',
    stateProvinceEn: 'Niigata Prefecture',
    countryEn: 'Japan',
    countryCode: 'JP',
    postalCode: '951-8132',
  },
};

export const mainNav = [
  { label: '見どころ', href: '/highlights/' },
  { label: '四季', href: '/seasons/' },
  { label: '散歩コース', href: '/courses/' },
  { label: 'アクセス', href: '/access/' },
  { label: '駐車場', href: '/parking/' },
  { label: '周辺グルメ', href: '/gourmet/' },
];

export const quickFacts = [
  { label: '入園料', value: '無料', note: '屋外公園区域' },
  { label: '目安時間', value: '60–90分', note: '神社・燕喜館を含む' },
  { label: '最寄りバス停', value: '市役所前', note: '徒歩約3分' },
  { label: '駐車料金', value: '30分 100円', note: 'A〜D駐車場' },
];

export const seasons = [
  {
    name: '春',
    kana: 'はる',
    period: '3月下旬–5月',
    title: '梅から桜へ、花の時間',
    description: '梅林の香りに始まり、ひょうたん池と空中庭園を桜が包みます。',
    image: '/images/plum-grove.webp',
    href: '/sakura/',
    accent: '桜・梅・牡丹',
  },
  {
    name: '夏',
    kana: 'なつ',
    period: '6月–8月',
    title: '深い緑と蓮池の朝',
    description: '松の木陰と水辺の涼しさ。蓮は朝の散歩でゆっくり眺めたい景色です。',
    image: '/images/summer-pond.webp',
    href: '/seasons/#summer',
    accent: '新緑・蓮・水景',
  },
  {
    name: '秋',
    kana: 'あき',
    period: '10月–11月',
    title: '静かな回廊と色づく木々',
    description: '空中庭園の曲線と落葉、石灯籠のある池畔に落ち着いた時間が流れます。',
    image: '/images/autumn-walk.webp',
    href: '/seasons/#autumn',
    accent: '紅葉・落葉・夕景',
  },
  {
    name: '冬',
    kana: 'ふゆ',
    period: '12月–2月',
    title: '雪景色と白山さま',
    description: '雪をまとった松と庭石、初詣の白山神社。新潟らしい凛とした季節です。',
    image: '/images/garden-lantern.webp',
    href: '/seasons/#winter',
    accent: '雪・初詣・静寂',
  },
];

export const courseList = [
  {
    duration: '30分',
    title: '水辺の小径',
    summary: '短い時間で白山公園らしい池、築山、石灯籠を巡ります。',
    stops: ['市役所前', 'ひょうたん池', '美由岐賀岡', '蓮池', '燕喜館前'],
    pace: '約1.2km',
  },
  {
    duration: '60分',
    title: '公園と白山さま',
    summary: '白山神社の参拝と歴史庭園をひとつの流れで楽しむ定番コースです。',
    stops: ['白山神社楼門', '拝殿', '梅林', 'ひょうたん池', '蓮池', '燕喜館'],
    pace: '約2.0km',
  },
  {
    duration: '120分',
    title: '文化と空中庭園',
    summary: '燕喜館、りゅーとぴあ、空中庭園まで足を延ばすゆったりコースです。',
    stops: ['白山神社', '白山公園', '燕喜館', '空中庭園', 'りゅーとぴあ', '信濃川方向'],
    pace: '約3.1km',
  },
];

export const gourmetList = [
  {
    name: '燕喜館の抹茶',
    category: '園内・和のひと休み',
    walk: '園内',
    description: '歴史ある座敷と庭を眺めながら、提供日に抹茶と菓子を楽しめます。',
    note: '提供日・内容は当日確認',
  },
  {
    name: 'りゅーとぴあのカフェ',
    category: '近い・休憩しやすい',
    walk: '徒歩3–5分',
    description: '観劇の前後や雨の日にも使いやすい、文化会館内のカフェです。',
    note: '催事日に営業時間変更あり',
  },
  {
    name: '青島食堂 東堀店',
    category: '生姜醤油ラーメン',
    walk: '徒歩5–10分',
    description: '新潟県を代表する生姜醤油ラーメン。冷える季節の散歩後にも似合います。',
    note: '混雑・売切れに注意',
  },
  {
    name: '三吉屋 西堀本店',
    category: '新潟あっさり醤油',
    walk: '徒歩15–20分',
    description: '細麺と澄んだスープが印象的な、新潟の伝統的な一杯です。',
    note: '営業日は当日確認',
  },
  {
    name: 'とんかつ太郎 古町本店',
    category: 'タレかつ丼',
    walk: '徒歩18–22分',
    description: '薄めのかつを甘辛い醤油だれにくぐらせた、新潟らしい名物料理です。',
    note: '昼は早めの来店がおすすめ',
  },
  {
    name: '古町の甘味と喫茶',
    category: 'まち歩きの余韻',
    walk: '徒歩15分前後',
    description: '老舗菓子店や小さな喫茶店を探しながら、古町へ歩くのも楽しみです。',
    note: '個店の定休日に注意',
  },
];

export const faqList = [
  {
    question: '白山公園は何時まで入れますか？',
    answer:
      '屋外の公園区域は自由に散策できます。ただし、白山神社の楼門、燕喜館、駐車場、文化施設にはそれぞれ利用時間があります。夜間は足元と周辺施設の閉館時間にご注意ください。',
  },
  {
    question: '入園料はかかりますか？',
    answer:
      '白山公園の屋外区域は無料です。燕喜館の一般見学も通常は無料ですが、催しや貸室利用、飲食には料金がかかる場合があります。',
  },
  {
    question: '新潟駅から一番わかりやすい行き方は？',
    answer:
      '新潟駅から路線バスで「市役所前」へ向かい、下車後に徒歩約3分がわかりやすい方法です。観光循環バスの運行日には「白山公園前」も便利です。',
  },
  {
    question: '桜の見頃はいつですか？',
    answer:
      '例年は4月上旬から中旬が中心ですが、気温により前後します。梅、桜、八重桜と時期をずらして花が続くため、最新の開花情報を確認して訪れてください。',
  },
  {
    question: '雨の日でも楽しめますか？',
    answer:
      '短い庭園散歩に加え、燕喜館やりゅーとぴあを組み合わせると過ごしやすくなります。石畳や園路が濡れるため、滑りにくい靴がおすすめです。',
  },
  {
    question: 'ベビーカーや車いすで歩けますか？',
    answer:
      '空中庭園や主要動線には平坦な区間がありますが、歴史庭園には細い園路や段差もあります。市役所前側や文化施設側から入り、無理のない範囲で巡ると安心です。',
  },
];

// 天気モジュール設定（Open-Meteo はキー不要・CORS 対応のためブラウザ直取得も可能）
export const weather = {
  endpoint: '/api/weather',
  direct:
    'https://api.open-meteo.com/v1/forecast?latitude=37.9144137&longitude=139.0393424&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&hourly=uv_index&timezone=Asia%2FTokyo&forecast_days=7&language=ja',
};

// 訪客サービス・周辺施設（店名は挙げず「タイプ」で中立的に）
export const facilities = [
  { type: 'トイレ', body: '公園内の複数箇所と、白山神社参道、燕喜館付近にあります。ベビーシートや多機能トイレを備える施設もあり、小さな子連れや車いすの方は事前に位置を確認すると安心です。' },
  { type: '駐車場', body: '市営の複数駐車場（例：30分100円の区画も）があり、園周辺の道路からアクセスできます。車いす対応区画の有無は駐車場ごとに異なるため、公式案内で確認してください。' },
  { type: '飲食', body: '園内の茶屋・カフェに加え、古町や大手通りには和食、ラーメン、甘味処など複数の店があります。営業日や混雑は個店によって異なります。' },
  { type: '宿泊', body: '新潟駅周辺や古町には、ビジネスホテルから旅館まで複数の宿があります。公園を拠点に、まち歩きと組み合わせるのに便利です。' },
  { type: '買い物', body: 'コンビニ、土産物店のほか、季節の花苗や園芸用品を扱う店が周辺にあります。夜間の営業時間にご注意ください。' },
  { type: '給油・充電', body: '周辺にガソリンスタンドと電気自動車の充電スポットがあります。長距離で訪れる方は、出発前の充電計画をおすすめします。' },
  { type: 'バリアフリー', body: '園路には砂利や段差のある区画もあります。平滑な動線や多機能トイレを活用し、無理のない範囲でお楽しみください。' },
  { type: '休憩', body: 'ベンチや東屋（四阿）、燕喜館の座敷など、疲れたら立ち寄れる休憩点が点在しています。' },
];

// 季節ごとの滞在戦略（新潟＝日本海側気候。気象庁の平年値を目安とした傾向）
export const seasonalStrategy = [
  { season: '春', period: '3月下旬–5月', weather: '雪解け後は寒暖の差が大きく、花見時に雨や強風の日も。上着と歩きやすい靴で。', water: 'ひょうたん池の周りを桜が包み、朝の池面が静かです。', wildlife: '桜・梅・牡丹のほか、渡り鳥の滞在が終わる頃。' },
  { season: '夏', period: '6月–8月', weather: '梅雨から夏へ。湿度が高く、朝方が最も涼しい。台風期は強風や増水に注意。', water: '蓮池の蓮が見頃（朝の散歩がおすすめ）。湿気で苔が深い緑に。', wildlife: '蓮、カエル、トンボ、ホタルの姿が見られる時期も。' },
  { season: '秋', period: '10月–11月', weather: '爽やかで晴れの日が多く、朝晩は冷え込みます。羽織るものがあると安心。', water: '落葉が池に映り、紅葉と水景のコントラストが美しい。', wildlife: '紅葉、実り、渡り鳥の飛来が増える季節。' },
  { season: '冬', period: '12月–2月', weather: '日本海側の大雪。積雪が多く、防寒と滑りにくい靴は必須。', water: '池が雪化粧し、凍結や静寂の風景に。', wildlife: '雪吊りの松、留鳥（シジュウカラなど）、裸木の凛とした美しさ。' },
];

// 訪問者タイプ別モデルコース
export const audienceRoutes = [
  {
    audience: '亲子家庭',
    focus: '小さな子連れでも安心の、お手洗いと休憩をこまめにとる動線。',
    duration: '60–90分',
    steps: [
      { name: '市役所前でスタート', note: '平坦でベビーカーも押しやすい。' },
      { name: 'ひょうたん池を一周', note: 'ベンチが多く、疲れたらすぐ休憩。' },
      { name: '燕喜館でお茶・休憩', note: '屋内で暖まり・涼みながら。' },
      { name: '白山神社参道をゆっくり', note: '参道は比較的平坦。' },
      { name: '古町で甘味を', note: '歩き慣れたら少し足を延ばして。' },
    ],
    tip: 'お手洗いの位置を事前に確認し、天候に合わせて屋内（燕喜館・りゅーとぴあ）を組み込むと過ごしやすいです。',
  },
  {
    audience: '摄影自然',
    focus: '光の良い時間と、水面・石灯籠・空中庭園の構図を狙う。',
    duration: '60–120分',
    steps: [
      { name: '早朝のひょうたん池', note: '逆光と池面、桜・紅葉の反射が狙い目。' },
      { name: '空中庭園', note: '曲線の園路と緑の層を。' },
      { name: '梅林・石灯籭', note: '質感と陰影を大切に。' },
      { name: '白山神社', note: '楼門と木々の借景。' },
    ],
    tip: '三脚は通行を妨げない場所で。他の方への配慮を忘れずに。朝と夕方の光が特に美しいです。',
  },
  {
    audience: '低体力・バリアフリー',
    focus: '段差を避け、平坦な動線とこまめな休憩で無理なく。',
    duration: '30–60分',
    steps: [
      { name: '市役所前側から入る', note: '比較的平坦な入口。' },
      { name: 'ひょうたん池周辺をゆっくり', note: 'ベンチで随時休憩。' },
      { name: '燕喜館', note: '屋内休憩・多機能トイレ。' },
      { name: '白山神社楼門前', note: '段差にご注意を。' },
    ],
    tip: '多機能トイレの位置を確認し、無理せず短い往復で十分。天候悪化時は屋内施設を中心に。',
  },
];

// 共通のおすすめコース（半日 / 全日）
export const generalRoutes = [
  {
    title: '半日コース（約60分）',
    summary: '公園の核心をコンパクトに巡る定番。',
    steps: [
      { name: '白山神社楼門', note: '参拝と楼門の佇まい。' },
      { name: '梅林', note: '季節の花を横目に。' },
      { name: 'ひょうたん池', note: '池畔の石灯籠と眺望。' },
      { name: '蓮池', note: '夏場は蓮、他季は静かな水景。' },
      { name: '燕喜館', note: '歴史ある座敷と庭。' },
    ],
  },
  {
    title: '全日コース（約120分）',
    summary: '文化施設まで足を延ばす、ゆったりプラン。',
    steps: [
      { name: '白山神社', note: '参拝と境内散策。' },
      { name: '白山公園', note: '回遊式庭園をじっくり。' },
      { name: '燕喜館', note: '移築再建の文化施設。' },
      { name: '空中庭園', note: '近代の庭園意匠。' },
      { name: 'りゅーとぴあ', note: '文化会館でひと休み。' },
      { name: '信濃川方面へ', note: '水辺の景観を望む。' },
    ],
  },
];
