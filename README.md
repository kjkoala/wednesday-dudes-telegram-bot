wednesday-dudes-telegram-bot
===

Token `<token>` can be retrieved from BotFather in Telegram.

Set Telegram bot webhook for Netlify:

```bash
curl \
  -F "url=https://<subdomain>.netlify.app/.netlify/functions/<function>" \
  https://api.telegram.org/bot<token>/setWebhook
```

Get webhook status:

```bash
curl \
  https://api.telegram.org/bot<token>/getWebhookInfo
```
