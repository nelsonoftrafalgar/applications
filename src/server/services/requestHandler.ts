import {Request, Response} from 'express-serve-static-core'

import { pool } from '../app'

const queryBuilder = require('./queryBuilder')

class RequestHandler {
  statistics = (type: string) => {
    return async (_: Request, res: Response) => {
      try {
        const result = await pool.query(queryBuilder.statistics(type))
        res.status(200).json(result.rows)
      } catch (error) {
        throw error
      }
    }
  }

  search = () => {
    return async (req: Request, res: Response) => {
      try {
        const {rows, rowCount} = await pool.query(queryBuilder.search(req.query))
        const data = rowCount ? rows : 'Nothing found'
        res.status(200).json(data)
      } catch (error) {
        throw error
      }
    }
  }

  add = () => {
    return async (req: Request, res: Response) => {
      try {
        await pool.query(queryBuilder.add(req.body))
        res.status(200).json('Added successfully')
      } catch (error) {
        throw error
      }
    }
  }

  edit = () => {
    return async (req: Request, res: Response) => {
      try {
        await pool.query(queryBuilder.edit(req.body))
        res.status(200).json('Edited successfully')
      } catch (error) {
        throw error
      }
    }
  }

  badGet = () => {
    return async (_: Request, res: Response) => {
      try {
        const result = await pool.query(queryBuilder.badGet())
        res.status(200).json(result.rows)
      } catch (error) {
        throw error
      }
    }
  }

  badPost = () => {
    return async (req: Request, res: Response) => {
      try {
        await pool.query(queryBuilder.badPost(req.body))
        res.status(200).json('Added successfully')
      } catch (error) {
        throw error
      }
    }
  }
}

const requestHandler = new RequestHandler()

module.exports = requestHandler
