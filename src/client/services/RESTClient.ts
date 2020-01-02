import { IAddState } from '../models/add'

export const getSearchResults = async (query: string, type: string) => {
  let results
  const url = new URL('http://localhost:4000/api/search')
  const params = {query, type}

  url.search = new URLSearchParams(params).toString()

  try {
    const data = await fetch(url as any)
    results = await data.json()
    if (!results.length) {
      results = 'Nothing found'
    }
  } catch (er) {
    throw new Error(er)
  }

  return results
}

export const addNewApplication = async (requestBody: IAddState) => {
  let resultStatus
  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }
  try {
    const data = await fetch('http://localhost:4000/api/add', options)
    const result = await data.json()
    resultStatus = result
  } catch (error) {
    resultStatus = error
  }

  return resultStatus
}
