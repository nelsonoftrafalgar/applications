import { ITableHeadProps } from '../../models/table'
import React from 'react'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {basic_font_color, basic_font_family} = globalStyles

const Th = styled.th`
  color: ${basic_font_color};
  font-family: ${basic_font_family};
  padding: 10px;
`

const TableHead: React.FC<ITableHeadProps> = ({data}) => {
  const renderHead = data.map((item: string) => {
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
