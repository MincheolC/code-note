// const moment = require('moment');
const { utcToZonedTime } = require('date-fns-tz')
const getUnixTime = require('date-fns/getUnixTime')
const parse = require('csv-parse');
const fs = require('fs');
const stream = fs.createReadStream('./tips_data/1.csv');

function getCsv(cb) {
  const output = []
  // Create the parser
  const parser = parse({
    delimiter: ',',
  })
  // Use the readable stream api
  parser.on('readable', function(){
    let record
    while (record = parser.read()) {
      output.push({
        timestamp: getUnixTime(utcToZonedTime(record[0], 'Asia/Seoul')),
        ph: parseFloat(record[1]),
        brix: parseFloat(record[2]),
      })
    }
  })
  // Catch any error
  parser.on('error', function(err){
    cb(err)
  })

  // When we are done, test that the parsed output matched what expected
  parser.on('end', function(){
    cb(null, output)
  })

  stream.pipe(parser);
}

module.exports = {
  getCsv,
}