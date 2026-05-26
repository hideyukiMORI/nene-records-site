# nene-records-site

NeNe Records の公開サイト一式。

| ディレクトリ | URL | 用途 |
|---|---|---|
| `lp/` | [nene-records.com](https://nene-records.com) | 製品ランディングページ |
| `docs/` | [nene-records.dev](https://nene-records.dev) | API仕様・開発者ドキュメント |

## 技術スタック

- [Astro 5](https://astro.build) — 静的サイト生成
- [Tailwind CSS v4](https://tailwindcss.com) — スタイリング
- ヘテムル — ホスティング（FTPアップロード）

## 開発

```bash
# LP
cd lp && npm install && npm run dev

# Docs
cd docs && npm install && npm run dev
```

## ビルド & デプロイ

```bash
# LP
cd lp && npm run build   # dist/ をヘテムル .com ドメインへアップロード

# Docs
cd docs && npm run build  # dist/ をヘテムル .dev ドメインへアップロード
```

GitHub Actions（`.github/workflows/`）で `main` ブランチへのプッシュ時に自動ビルド・FTPデプロイします。

### 必要な GitHub Secrets

| Secret | 説明 |
|---|---|
| `HETEML_FTP_HOST` | ヘテムルFTPホスト名 |
| `HETEML_FTP_USER_LP` | .com 用FTPユーザー |
| `HETEML_FTP_PASS_LP` | .com 用FTPパスワード |
| `HETEML_FTP_DIR_LP` | .com のアップロード先ディレクトリ |
| `HETEML_FTP_USER_DOCS` | .dev 用FTPユーザー |
| `HETEML_FTP_PASS_DOCS` | .dev 用FTPパスワード |
| `HETEML_FTP_DIR_DOCS` | .dev のアップロード先ディレクトリ |
