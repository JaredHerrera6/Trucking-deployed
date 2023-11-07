const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.DBPORT,
  database: 'trucking'
})

module.exports = pool
