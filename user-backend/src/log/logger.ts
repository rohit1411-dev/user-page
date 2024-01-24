import winston from 'winston';
const { combine, timestamp } = winston.format;

const Consoletransport = new winston.transports.Console({
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint()
    )
})

const Logger = winston.createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }), winston.format.json()
    ),
    transports: Consoletransport
});

export { Logger };