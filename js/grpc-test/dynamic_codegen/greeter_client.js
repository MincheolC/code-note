const PROTO_PATH = __dirname + '/../protos/helloworld.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  const target = 'localhost:50051';
  const client = new hello_proto.Greeter(target, grpc.credentials.createInsecure());
  const user = 'mincheol'
  client.sayHello({name: user}, (err, response) => {
    if (err) {
      return console.log(err);
    }
    console.log('Greeting: ', response.message);
  })
}

main();