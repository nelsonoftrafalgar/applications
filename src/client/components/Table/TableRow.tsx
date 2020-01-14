import { Button, Td } from '../../styles'

import { ITableRow } from '../../models/search'
import React from 'react'

const TableRow: React.FC<ITableRow> = ({handleOpenEditModal, id, data}) => {
  return (
    <tr>
      {data}
      {handleOpenEditModal && <Td><Button onClick={handleOpenEditModal(id, true)}>Edit</Button></Td>}
    </tr>
  )
}

export {TableRow}
