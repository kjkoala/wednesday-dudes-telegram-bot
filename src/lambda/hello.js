const https = require('https');

const METHOD_POST = 'POST';


async function handler(event, context) {
  console.log('Token', process.env.TELEGRAM_BOT_TOKEN);

  if (event.httpMethod !== METHOD_POST) {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const body = event.body;

  let data;

  try {
    data = JSON.parse(body);
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

  console.log('Body', data);

  const chatId = data.message.chat.id;
  const token = process.env.TELEGRAM_BOT_TOKEN;

  let url = `https://api.telegram.org/bot${token}/sendMessage`;
  url += `?chat_id=${chatId}&text=Dude`;

  try {
    const response = await fetch(url);

    return {
      statusCode: 200,
      body: 'Success',
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 422,
      body: 'Something went wrong',
    };

  }
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // if (res.statusCode !== 200) {
          // console.error(res);
          // reject({ status: res.statusCode });
          // return;
        // }

        console.log(res.statusCode);
        console.log(data);
        resolve();
      });
    });

    req.on('error', (err) => {
      console.error(err);
      reject(err);
    });

    req.end();
  });
}

exports.handler = handler;
