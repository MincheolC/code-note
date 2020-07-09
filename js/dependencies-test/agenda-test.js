const Agenda = require('agenda');
const { MongoClient } = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
//   console.log("Connected successfully to server");

//   const agenda = new Agenda({
//     mongo: client.db('brewguru'),
//     processEvery: '1 seconds', // DB 에서 job 조회 주기
//   });

//   agenda.define('hello', job => {
//     console.log('Hello!');
//   });

//   agenda.on('ready', () => {
//     console.log("Connected to MongoDB");
//     (async function() {
//       await agenda.start();

//       await agenda.every('5 seconds', 'hello'); // job 실행 주기
//     })();
//   });
// });

async function run() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected successfully to mongoDB");

    const agenda = new Agenda({
      mongo: client.db('brewguru'),
      processEvery: '1 seconds', // DB 에서 job 조회 주기
    });

    agenda.define('hello', job => {
      console.log('Hello!');
    });

    agenda.on('ready', () => {
      console.log("Connected to MongoDB");
      (async function() {
        await agenda.start();

        await agenda.every('5 seconds', 'hello'); // job 실행 주기
      })();
    });

  } catch (e) {
    console.error(e);
  }
}

run();
