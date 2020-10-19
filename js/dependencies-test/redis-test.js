const redis = require('redis');
const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

client.set('test', 'test', redis.print)
client.get('test', redis.print)