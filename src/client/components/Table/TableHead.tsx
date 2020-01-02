import React from 'react'
import { globalStyles } from '../../styles/styles'
import { searchTableHead } from '../../data/searchTable'
import styled from 'styled-components'

const Th = styled.th`
  color: ${globalStyles.basic_font_color};
  font-family: ${globalStyles.basic_font_family};
  padding: 10px;
`

const TableHead: React.FC = () => {
  const renderHead = searchTableHead.map((item: string) => {
    return <Th key={item}>{item}</Th>
  })

  return (
    <thead>
      <tr>
        {renderHead}
      </tr>
    </thead>
  )
}

export {TableHead}
