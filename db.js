const Pool = require('pg').Pool
const Pool = new Pool({
    user: "postgres",
    password: '12345',
    host: "localhost",
    port: 5433,
    database: "avecoder"
})

module.exports = Pool

