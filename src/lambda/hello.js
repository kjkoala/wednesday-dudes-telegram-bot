const https = require('https');

const METHOD_POST = 'POST';

async function handler(event, context) {

  if (event.httpMethod !== METHOD_POST) {
    return { statusCode: 405, body: 'Method not allowed' };
  }
  
  let data;

  try {
    data = JSON.parse(event.body);
    console.log('[DATA]', data);
  } catch (err) {
    console.error('Failed to parse body as JSON', body);
  }

  if (!data) {
    console.error('Bad request', httpMethod);
    return {
      statusCode: 400,
      body: 'Bad request',
    };
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;

  let url = `https://api.telegram.org/bot${token}/answerCallbackQuery`;
  url += `?callback_query_id=${data.callback_query.id}&url=https://kjkoala.github.io/FlappyBird`;

  https.get(url)
}

exports.handler = handler;
