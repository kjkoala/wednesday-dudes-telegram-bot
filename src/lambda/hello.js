exports.handler = (event, context, callback) => {
  console.log('hello called', event.path, event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: 'Hello world',
  });
};
