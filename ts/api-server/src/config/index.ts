type MongoConfig = {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
}

const mongoConfig: MongoConfig = {
    host: 'localhost',
    port: 27017,
    username: 'root',
    password: '1234'
}

export default {
    mongoConfig
}