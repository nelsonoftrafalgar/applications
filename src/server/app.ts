require('dotenv').config()

import { Pool } from 'pg'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
const statistics = require('./routing/statistics')
const search = require('./routing/search')
const add = require('./routing/add')

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.BD_PORT)
})

const port = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('dist'))

app.use('/api/statistics', statistics)

app.use('/api/search', search)

app.use('/api/add', add)

// tslint:disable-next-line: no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
