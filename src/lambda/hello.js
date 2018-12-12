exports.handler = (event, context, callback) => {
  console.log('hello called', event.httpMethod, event.path, event.queryStringParameters);
  console.log('body', event.body);
  callback(null, {
    statusCode: 200,
    body: 'Hello world',
  });
};
