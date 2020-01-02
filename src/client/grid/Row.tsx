import React from 'react'
import styled from 'styled-components'

interface IRowStyle {
  direction: string
  mt: string
  expand: boolean
}

interface IRow {
  direction?: string
  mt?: string
  expand?: boolean
}

const Style = styled('div')<IRowStyle>`
  max-width: 100%;
  display: flex;
  ${({direction}) => `flex-direction: ${direction};`}
  ${({mt}) => `margin-top: ${mt}px;`}
  ${({expand}) => `flex-grow: ${expand ? 1 : 0};`}
`

const Row: React.FC<IRow> = ({
  children,
  mt = '0',
  direction = 'row',
  expand = false
}) => {
  return (
    <Style
      direction={direction}
      mt={mt}
      expand={expand}
    >
      {children}
    </Style>
  )
}

export {Row}
