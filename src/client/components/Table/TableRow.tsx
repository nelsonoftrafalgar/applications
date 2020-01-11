import { ITableRow } from '../../models/search'
import React from 'react'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {basic_font_color, basic_font_family, dark_bg, light_font_color} = globalStyles

const Td = styled.td`
  color: ${basic_font_color};
  font-family: ${basic_font_family};
  text-align: center;
  background: ${dark_bg};
  padding: 10px;
`

const Button = styled.button`
  border-radius: 50px;
  background: ${dark_bg};
  color: ${light_font_color};
  font-size: 16px;
  cursor: pointer;
  font-family: ${basic_font_family};
`

const TableRow: React.FC<ITableRow> = ({handleOpenEditModal, id, data}) => {
  return (
    <tr>
      {data}
      <Td><Button onClick={handleOpenEditModal(id, true)}>Edit</Button></Td>
    </tr>
  )
}

export {TableRow}
