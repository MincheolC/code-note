const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, json } = format;

const userLogger = createLogger({
    levels: config.syslog.levels,
    defaultMeta: { component: 'user-service' },
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        json(),
    ),
    transports: [
        new transports.Console({ level: 'error' }),
        new transports.File({ filename: './logs/combined.log', level: 'info' }),
    ],
    exceptionHandlers: [new transports.Console(), new transports.File({ filename: './logs/combined.log' })],
});
const paymentLogger = createLogger({
    transports: [new transports.Console()],
});

userLogger.info('New user created');
userLogger.error("Unable to find user: user doesn't exist");

module.exports = {
    userLogger: userLogger,
    paymentLogger: paymentLogger,
};
