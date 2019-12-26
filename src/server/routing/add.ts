import express from 'express'
const requestHandler = require('../services/requestHandler')

const add = express.Router()

add.post('/', requestHandler.add())

module.exports = add
