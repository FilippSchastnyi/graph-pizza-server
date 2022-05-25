import {Pool} from 'pg'

const pool = new Pool({
    user: process.env.DB_NAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

export default pool;
