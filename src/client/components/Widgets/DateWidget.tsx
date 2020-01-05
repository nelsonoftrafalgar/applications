import React, { MutableRefObject, useRef } from 'react'

import { IDateWidgetProps } from '../../models/statistics'
import {LineChartComponent} from '../Charts/'
import { colors } from '../../data/statistics'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {light_bg} = globalStyles

const Container = styled('div')<any>`
  width: 100%;
  background: ${light_bg};
  padding: 20px;
`

const DateWidget: React.FC<IDateWidgetProps> = ({data}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const parentWidth = useRef(100)

  if (containerRef.current) {
    const {width} = containerRef.current.getBoundingClientRect()
    parentWidth.current = width
  }

  return (
    <Container ref={containerRef}>
      <LineChartComponent data={data} parentWidth={parentWidth.current} color={colors[4]}/>
    </Container>
  )
}

export {DateWidget}
