import { IAddRequestParams, IEditRequestParams, ISearchRequestParams, ISearchTypes } from '../model'

class QueryBuilder {
  private TABLE = 'public.applications'
  private CN = 'company_name'
  private PN = 'position_name'
  private SMIN = 'salary_min'
  private SMAX = 'salary_max'
  private AD = 'application_date'
  private AR = 'application_result'
  private ALL = `${this.CN}, ${this.PN}, ${this.SMIN}, ${this.SMAX}, ${this.AD}, ${this.AR}`

  search = ({query, type}: ISearchRequestParams) => {
    if (!query || !type) {
      return {text: '', values: ['']}
    }
    const searchTypes: ISearchTypes = {
      company_name: this.CN,
      position_name: this.PN,
      application_result: this.AR
    }
    const text = `SELECT id, ${this.ALL} FROM ${this.TABLE} WHERE ${searchTypes[type]} LIKE $1`
    const values = [`%${query}%`]

    return {text, values}
  }

  add = (request: IAddRequestParams) => {
    const text = `INSERT INTO ${this.TABLE}(${this.ALL}) VALUES ($1, $2, $3, $4, $5, $6);`
    const values = Object.values(request)

    return {text, values}
  }

  statistics = (type: string) => {
    const text = `SELECT id, ${type} FROM ${this.TABLE};`
    return {text}
  }

  edit = (request: IEditRequestParams) => {
    const text = `UPDATE ${this.TABLE} SET ${this.CN}=$2, ${this.PN}=$3, ${this.SMIN}=$4, ${this.SMAX}=$5, ${this.AD}=$6, ${this.AR}=$7
      WHERE id=$1;`
    const values = Object.values(request)

    return {text, values}
  }
}

const queryBuilder = new QueryBuilder()

module.exports = queryBuilder
