require('dotenv').config()
const config = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    pool: {min: 0, max: 7}
});

class conn {
    constructor() {
        console.log("******************************")
        console.log({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        })
        console.log("******************************")
        config.schema.hasTable("tb_logs").then(async function (exists) {
            if (!exists) {
                await config.schema.createTable("tb_logs", async function (t) {
                    t.increments('logs_id', 11);
                    t.string('logs_req', 255);
                    t.string('logs_path', 255);
                    t.timestamp('created_at');
                });
            }
        })
    }


    async insert(data, table) {
        const result = await config(table).insert(data)
        return result
    }
}

module.exports = new conn();
