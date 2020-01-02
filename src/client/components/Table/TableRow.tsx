import { ISearchResult } from '../../models/search'
import React from 'react'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const Td = styled.td`
  color: ${globalStyles.basic_font_color};
  font-family: ${globalStyles.basic_font_family};
  text-align: center;
  background: ${globalStyles.dark_bg};
  padding: 10px;
`

const TableRow: React.FC<ISearchResult> = ({
  company_name,
  position_name,
  salary_min,
  salary_max,
  application_date,
  application_result
}) => (
  <tr>
    <Td>{company_name}</Td>
    <Td>{position_name}</Td>
    <Td>{salary_min}</Td>
    <Td>{salary_max}</Td>
    <Td>{application_date}</Td>
    <Td>{application_result}</Td>
  </tr>
)

export {TableRow}
