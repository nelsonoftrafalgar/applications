import express from 'express'
const requestHandler = require('../services/requestHandler')

const statistics = express.Router()

statistics.get('/position', requestHandler.statistics('position_name'))

statistics.get('/salary/min', requestHandler.statistics('salary_min'))

statistics.get('/salary/max', requestHandler.statistics('salary_max'))

statistics.get('/date', requestHandler.statistics('application_date'))

statistics.get('/result', requestHandler.statistics('application_result'))

module.exports = statistics
