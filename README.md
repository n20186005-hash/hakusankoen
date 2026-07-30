# HakusanKoen.com

新潟市中央区の国指定名勝「白山公園」を紹介する、日本語のみの非公式観光ガイドです。

## 技術構成

- Astro 5
- TypeScript
- Tailwind CSS 4
- pnpm
- Cloudflare Workers Static Assets
- Markdown/CMS/データベース/ログインなし
- Google Analytics 4: `G-HXM22WWPKP`

## 主なページ

- `/` — トップページ
- `/highlights/` — 見どころ
- `/about/` — 歴史
- `/seasons/` — 四季
- `/sakura/` — 桜
- `/courses/` — 30・60・120分散歩コース
- `/access/` — 交通
- `/parking/` — 駐車場
- `/gourmet/` — 周辺グルメ
- `/hakusan-jinja/` — 白山神社
- `/enkikan/` — 燕喜館
- `/faq/` — FAQ
- `/credits/` — 写真・資料クレジット
- `/privacy/` — プライバシーポリシー

## ローカル起動

Astro 7の要件に合わせ、Node.js 22.12.0以上を使用してください。

```bash
corepack enable
pnpm install
pnpm dev
```

ブラウザで `http://localhost:4321` を開きます。

## ビルド

```bash
pnpm build
pnpm preview
```

静的ファイルは `dist/` に生成されます。

## Cloudflare Workersへデプロイ

1. Cloudflareへログインします。

```bash
pnpm exec wrangler login
```

2. デプロイします。

```bash
pnpm deploy
```

`wrangler.jsonc` は Cloudflare Workers Static Assets 用です。Worker名は `hakusan-koen`、配信ディレクトリは `dist` です。

3. Cloudflare Dashboardの Workers & Pages から `hakusan-koen` を開き、Custom Domains で次を設定します。

- `hakusankoen.com`
- `www.hakusankoen.com`（必要な場合）

正規URLは `https://hakusankoen.com` として設定済みです。wwwを使う場合は片方へ301リダイレクトしてください。

## 情報更新

共通情報は `src/data/site.ts` に集約しています。

- 最終確認日
- 駐車料金・台数
- クイック情報
- 季節情報
- 散歩コース
- グルメ一覧
- FAQ

変更しやすい運用にするため、変動情報をページへ重複記載しすぎない構成にしています。ただし本文中にも数値があるため、料金や時間を変更する際は全文検索してください。

```bash
rg "593|30分 100円|2026年7月30日" src
```

## 外部通信

通常閲覧時に発生する外部リクエストは、Google Analyticsのタグのみです。写真、アイコン、フォント、地図はサイト内で配信します。写真の出典リンクはライセンス表示のため `/credits/` に集約しています。

## 写真ライセンス

`IMAGE-LICENSES.md` と `/credits/` を参照してください。写真の一部はCC BY-SAであり、加工画像の再利用時にも同ライセンス条件の確認が必要です。
