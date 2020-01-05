import {BarChartComponent, IBarChartData} from '../Charts/'
import React, { MutableRefObject, useRef } from 'react'

import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {light_bg, basic_font_color, basic_font_family} = globalStyles

const Container = styled('div')<any>`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
`

const Title = styled.h2`
  color: ${basic_font_color};
  font-size: 20px;
  font-family: ${basic_font_family};
  margin-bottom: 20px;
`

interface IQuantityWidgetProps {
  title: string
  data: IBarChartData[]
  color: string
}

const QuantityWidget: React.FC<IQuantityWidgetProps> = ({data, color, title}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const parentWidth = useRef(100)

  if (containerRef.current) {
    const {width} = containerRef.current.getBoundingClientRect()
    parentWidth.current = width
  }

  return (
    <Container ref={containerRef}>
      <Title>{title}</Title>
      <BarChartComponent parentWidth={parentWidth.current} color={color} data={data}/>
    </Container>
  )
}

export {QuantityWidget}
