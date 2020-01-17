import { getRequestOptions } from '../helpers'

export const HOST = 'http://localhost:3000/api'

class Request {
  search = (query: string, type: string) => {
    return fetch(`${HOST}/search?query=${query}&type=${type}`)
  }

  add = <S>(method: string, body: S) => {
    return fetch(`${HOST}/add`, getRequestOptions<S>(method, body))
  }

  statistics = (type: string) => {
    return fetch(`${HOST}/statistics/${type}`)
  }

  edit = <S>(method: string, body: S) => {
    return fetch(`${HOST}/edit`, getRequestOptions<S>(method, body))
  }

  bad = <S>(method: string, body?: S) => {
    return fetch(`${HOST}/bad`, getRequestOptions<S>(method, body))
  }
}

export const request = new Request()
