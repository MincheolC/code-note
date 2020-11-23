const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, json } = format;
const dateFormat = require('date-fns/format');
const { koLocale } = require('date-fns/locale/ko');

const logger = (() => {
  const fileName = dateFormat(Date.now(), 'yyyy-MM', { locale: koLocale });
  return createLogger({
    levels: config.syslog.levels,
    defaultMeta: { component: 'monitoring-service' },
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    transports: [
      new transports.Console({ level: 'error' }),
      new transports.File({ filename: `./logs/${fileName}.log`, level: 'info' }),
    ],
    exceptionHandlers: [
      new transports.Console(),
      new transports.File({ filename: `./logs/${fileName}.log` }),
    ],
  });
})();

module.exports = {
  logger,
};
