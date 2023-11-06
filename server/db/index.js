const Pool = require('pg').Pool
require('dotenv').config()

//Is what is going to connect to put postgres database
const pool = new Pool({
    user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: 'trucking'
});
module.exports = pool
