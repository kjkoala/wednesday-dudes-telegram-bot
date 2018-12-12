const METHOD_POST = 'POST';

exports.handler = (event, context, callback) => {
  const httpMethod = event.httpMethod;

  if (httpMethod !== METHOD_POST) {
    callback(null, {
      statusCode: 405,
      body: 'Method not allowed',
    });
    console.error('Method not allowed', httpMethod);
    return;
  }

  const body = event.body;

  let data;

  try {
    data = JSON.parse(body);
  } catch (err) {
    console.error('Failed to parse body as JSON', body);
  }

  if (!data) {
    callback(null, {
      statusCode: 400,
      body: 'Bad request',
    });
    console.error('Bad request', httpMethod);
    return;
  }

  console.log('body', data);

  callback(null, {
    statusCode: 200,
    body: 'Hello world',
  });
};
