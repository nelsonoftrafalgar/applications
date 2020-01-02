import React, { useContext } from 'react'
import { SET_SEARCH_RESULTS, SET_SEARCH_TYPE, SET_SEARCH_VALUE } from '../state/actions'

import { ActionType } from '../models/main'
import { MainContext } from '../context/context'
import { SearchFormElementType } from '../models/search'
import { getSearchResults } from '../services/RESTClient'
import { globalStyles } from '../styles/styles'
import { searchErrors } from '../data/search'
import styled from 'styled-components'
import { useValidation } from '../helpers/useValidation'

const {
  light_bg,
  light_font_color,
  dark_bg,
  basic_font_family,
  form_error_color
} = globalStyles

const Container = styled.div`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
`
const Input = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  margin-right: 20px;
  font-family: ${basic_font_family};
`

const Select = styled.select`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  background-color: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  margin-right: 20px;
  font-family: ${basic_font_family};
  appearance: none;
  cursor: pointer;
`

const Button = styled.button`
  border-radius: 50px;
  padding: 10px 20px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  cursor: pointer;
  font-family: ${basic_font_family};
  margin-right: 20px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
`

const EmptySearch = styled.p`
  font-family: ${basic_font_family};
  color: ${light_font_color};
  margin-right: 20px;
`

const Error = styled.p`
  font-family: ${basic_font_family};
  color: ${form_error_color};
  margin-right: 20px;
`

const SearchForm = () => {
  const {dispatch, state} = useContext(MainContext)
  const {error, submitError, validateInput, validateSubmit} = useValidation(searchErrors)
  const {results} = state.search

  const handleFormChange = (type: ActionType) => (e: React.ChangeEvent<SearchFormElementType>) => {
    const {value, localName} = e.currentTarget
    validateInput('text', value, localName)
    dispatch({type, payload: value})
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {value, type} = state.search
    const isValid = validateSubmit([value, type])

    if (!isValid) {
      const payload = await getSearchResults(value, type)
      dispatch({type: SET_SEARCH_RESULTS, payload})
    }
  }

  const isEmptySearch = results === 'Nothing found'

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Input
          onChange={handleFormChange(SET_SEARCH_VALUE)}
          placeholder='Search'
          type='text'
        />
        <Select placeholder='Select' onChange={handleFormChange(SET_SEARCH_TYPE)}>
          <option aria-selected={true} value=''>Select type</option>
          <option aria-selected={false} value='company_name'>company</option>
          <option aria-selected={false} value='position_name'>position</option>
          <option aria-selected={false} value='application_result'>result</option>
        </Select>
        <Button type='submit'>Submit</Button>
        {isEmptySearch && <EmptySearch>{results}</EmptySearch>}
        {error && <Error>{error}</Error>}
        {submitError && <Error>{submitError}</Error>}
      </Form>
    </Container>
  )
}

export default SearchForm
