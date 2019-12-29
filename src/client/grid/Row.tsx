import React from 'react'
import styled from 'styled-components'

interface IRowStyle {
  direction: string
}

interface IRow {
  direction?: string
}

const Style = styled('div')<IRowStyle>`
  max-width: 100%;
  display: flex;
  ${({direction}) => `flex-direction: ${direction};`}
`

const Row: React.FC<IRow> = ({
  children,
  direction = 'row'
}) => {
  return (
    <Style direction={direction}>
      {children}
    </Style>
  )
}

export {Row}
