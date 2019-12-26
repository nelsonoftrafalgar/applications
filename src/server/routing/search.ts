import express from 'express'
const requestHandler = require('../services/requestHandler')

const search = express.Router()

search.get('/', requestHandler.search())

module.exports = search
