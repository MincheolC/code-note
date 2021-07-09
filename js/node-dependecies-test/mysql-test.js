const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: '1234',
    database: 'cljdev',
  });
   
  // simple query
  connection.query(
    'SELECT now()',
    function(err, results, fields) {
      console.log(err);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
   
  