# Saitou HP - ファイネスト レジデンス ファクトリー株式会社

不動産会社のコーポレートサイト

## 環境変数の設定（重要）

本番環境（Render）で以下の環境変数を設定してください。

| 変数名 | 説明 | 設定値 |
|--------|------|--------|
| `RESEND_API_KEY` | Resend APIキー | Resendダッシュボードから取得 |
| `CONTACT_EMAIL` | お問い合わせ受信メールアドレス | **本番用のメールアドレスに変更してください** |

### 設定手順（Render）

1. Renderダッシュボードでサービスを選択
2. 「Environment」タブを開く
3. 上記の環境変数を追加・編集
4. 「Save Changes」をクリック

※ `CONTACT_EMAIL` は現在テスト用アドレスが設定されています。本番運用前に必ず正式なメールアドレスに変更してください。

## ローカル開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動（ビルド後）
npm run start
```

## ブログ記事の追加方法

1. `src/content/blog/` に新しいJSONファイルを作成
2. `src/content/blog/index.js` にimportを追加
3. ビルド＆デプロイ

### 記事JSONの形式

```json
{
  "slug": "url-slug",
  "title": "記事タイトル",
  "date": "2024-11-25",
  "excerpt": "記事の概要",
  "thumbnail": "https://画像URL",
  "content": "## 見出し\n\n本文をMarkdownで記述"
}
```
