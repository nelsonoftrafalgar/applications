import { IAddState } from '../models/add'
import { IEditState } from '../models/edit'
import { handleRequest } from '../helpers'
import { request } from './request'

const {search, add, statistics , edit} = request

export const getSearchResults = async (query: string, type: string) => {
  return handleRequest(search(query, type))
}

export const addNewApplication = async (requestBody: IAddState) => {
  return handleRequest(add<IAddState>('POST', requestBody))
}

export const getStatisticsData = async (type: string) => {
  return handleRequest(statistics(type))
}

export const editApplication = async (requestBody: IEditState) => {
  return handleRequest(edit<IEditState>('PUT', requestBody))
}
