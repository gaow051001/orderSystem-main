require('dotenv').config()
// console.log(process.env)

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'orderdatabase.cpvii3xslims.us-east-2.rds.amazonaws.com',
  database: 'OrderDB',
  password: 'zX0kQZXm2jOLfNcEUsKR',
  port: 5432,
})
// const { Pool } = require('pg')
// const isProduction = process.env.NODE_ENV === 'production'
// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//     ssl: isProduction
// })

module.exports =  pool ;