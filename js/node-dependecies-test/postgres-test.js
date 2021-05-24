const { Pool } = require('pg');
const pool = new Pool({
    user: 'print@print-postgres',
    host: 'print-postgres.postgres.database.azure.com',
    database: 'print',
    password: 'junctionx!23',
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
});