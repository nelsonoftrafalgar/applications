import express from 'express'
const requestHandler = require('../services/requestHandler')

const bad = express.Router()

bad.get('', requestHandler.badGet())

bad.post('', requestHandler.badPost())

module.exports = bad
