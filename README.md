wednesday-dudes-telegram-bot
===

> Telegram Bot with a collection of images of [It's Wednesday My Dudes meme](https://knowyourmeme.com/memes/it-is-wednesday-my-dudes)

Name: **Wednesday Dudes Bot**

Name tag: **@WednesdayDudesBot**

Command | Description
--- | ---
dude | Sends a relevant image to the chat based on current day of the week

### Configuration

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
