import express from 'express'
const requestHandler = require('../services/requestHandler')

const edit = express.Router()

edit.put('/', requestHandler.edit())

module.exports = edit
