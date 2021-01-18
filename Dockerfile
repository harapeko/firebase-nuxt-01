# NOTE:
# 公式FAQが14にあがっている
# https://ja.nuxtjs.org/faq/deployment-cloud-run/
# GCPのドキュメントは12でちょっと古い

FROM node:10-alpine
WORKDIR /usr/src/app
COPY . .

# Cloud Run利用の制約として、コンテナは0.0.0.0をリッスンしなければならない
# Nuxt.jsデフォルトはlocalhostなので、
# Cloud Runの要求に合わせるために環境変数HOSTに0.0.0.0を指定する
#
# Cloud Runデフォルトで8080ポートにリクエストされるので、
# アプリケーションも8080ポートに対応する必要があるが、
# Cloud Runが自動的にPORT環境変数に値を設定する。
ENV HOST 0.0.0.0

CMD ["npm", "start"]
