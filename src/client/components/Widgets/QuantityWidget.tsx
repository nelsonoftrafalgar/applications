import React, { MutableRefObject, useRef } from 'react'

import {BarChartComponent} from '../Charts/'
import { IQuantityWidgetProps } from '../../models/statistics'
import {Title} from '../../styles'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {light_bg} = globalStyles

const Container = styled('div')<any>`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
`

const QuantityWidget: React.FC<IQuantityWidgetProps> = ({data, color, title}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const parentWidth = useRef(100)

  if (containerRef.current) {
    const {width} = containerRef.current.getBoundingClientRect()
    parentWidth.current = width
  }

  return (
    <Container ref={containerRef}>
      <Title margin={'0 0 20px 0'}>{title}</Title>
      <BarChartComponent parentWidth={parentWidth.current} color={color} data={data}/>
    </Container>
  )
}

export {QuantityWidget}
