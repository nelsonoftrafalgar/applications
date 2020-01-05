import React, { MutableRefObject, useRef } from 'react'

import { IPercentWidgetProps } from '../../models/statistics'
import {PieChartWithLegend} from '../Charts/'
import { colors } from '../../data/statistics'
import { getChartData } from '../../helpers/statistics'
import { globalStyles } from '../../styles/styles'
import styled from 'styled-components'

const {light_bg} = globalStyles

const Container = styled('div')<{padding: number}>`
  width: 100%;
  background: ${light_bg};
  ${({padding}) => `padding: ${padding}px;`}
`

const PercentWidget: React.FC<IPercentWidgetProps> = ({state, dimension}) => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>
  const parentWidth = useRef(200)
  const padding = 20

  if (containerRef.current) {
    const {width} = containerRef.current.getBoundingClientRect()
    parentWidth.current = width
  }

  const chartData = getChartData(state, dimension)
  const widthProps = parentWidth.current - (padding * 2)

  return (
    <Container padding={padding} ref={containerRef}>
      <PieChartWithLegend parentWidth={widthProps} colors={colors} data={chartData}/>
    </Container>
  )
}

export {PercentWidget}
