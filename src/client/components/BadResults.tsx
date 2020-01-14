import React, { useContext, useEffect } from 'react'
import {TableHead, TableRow} from './Table'

import { GET_BAD_COMPANIES } from '../state/actions'
import { IBadResult } from '../models/bad'
import { MainContext } from '../context/context'
import { Td } from '../styles'
import { badTableHead } from '../data/table'
import { getBadCompanies } from '../services/RESTClient'
import { globalStyles } from '../styles/styles'
import styled from 'styled-components'

const {light_bg} = globalStyles

const Container = styled.div`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
  height: 100%;
`

const Table = styled.table`
  width: 100%;
  border-spacing: 5px;
`

const BadResults = () => {
  const {dispatch, state: {bad: {results}}} = useContext(MainContext)

  useEffect(() => {
    (async () => {
      const payload = await getBadCompanies()
      dispatch({type: GET_BAD_COMPANIES, payload})
    })()
  }, [])

  const renderBadResults = results.map((item: IBadResult) => {
    const {id} = item
    const keys = Object.keys(item).filter((key) => key !== 'id')
    const data = keys.map((key, index) => <Td key={`${index} ${id}`}>{item[key]}</Td>)
    return <TableRow id={id} key={id} data={data}/>
  })

  return (
    <>
      <Container>
        <Table>
          <TableHead data={badTableHead}/>
          <tbody>
            {renderBadResults}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default BadResults
