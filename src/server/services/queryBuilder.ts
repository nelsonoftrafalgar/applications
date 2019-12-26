import { IAddRequestParams, ISearchRequestParams, ISearchTypes } from '../model'

class QueryBuilder {
  search = ({query, type}: ISearchRequestParams) => {
    if (!query || !type) {
      return {text: '', values: ['']}
    }
    const searchTypes: ISearchTypes = {
      company_name: 'company_name',
      position_name: 'position_name',
      application_result: 'application_result'
    }
    const text = `SELECT id, company_name, position_name, salary_min, salary_max, application_date, application_result
    FROM public.applications WHERE ${searchTypes[type]} LIKE $1`
    const values = [`%${query}%`]

    return {text, values}
  }

  add = ({
    company_name,
    position_name,
    salary_min,
    salary_max,
    application_date,
    application_result}: IAddRequestParams) => {
    const text = `INSERT INTO public.applications(
      company_name, position_name, salary_min, salary_max, application_date, application_result)
      VALUES ($1, $2, $3, $4, $5, $6);`
    const values = [
      company_name,
      position_name,
      salary_min,
      salary_max,
      application_date,
      application_result
    ]
    return {text, values}
  }

  statistics = (type: string) => {
    const text = `SELECT id, ${type} FROM public.applications`
    return {text}
  }
}

const queryBuilder = new QueryBuilder()

module.exports = queryBuilder
