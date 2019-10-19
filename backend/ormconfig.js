const dotenv = require('dotenv');
dotenv.config();

const config = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    username: process.env.PG_USER,
    password: process.env.PG_PW,
    database: process.env.PG_DB,
    cli: {
        "migrationsDir": "src/migrations"
    },
    migrations: ["src/migrations/*.ts"],
    entities: ["src/**/*.entity.ts"],
    synchronize: false,
};

module.exports = config;
