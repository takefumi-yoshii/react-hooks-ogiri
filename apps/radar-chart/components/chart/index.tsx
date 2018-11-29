import * as React from 'react'
import { Record } from '../records'
import { getPoints } from './points'
import BgCircles from './bgCircles'
import BgLines from './bgLines'
import RadarPolygon from './radarPolygon'
import RadarCircles from './radarCircles'
import ItemTexts from './itemTexts'

// ______________________________________________________
//
// @ Types

type Props = {
  records: Record[]
  max: number
  size: number
  padding: number
  progress: number
  className?: string
}
// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const rectSize = props.size + props.padding * 2
  const center = rectSize * 0.5
  const {
    radarPoints,
    linesPoints,
    itemsPoints
  } = getPoints(
    props.records,
    props.max,
    props.size,
    center,
    props.progress,
    15
  )
  return (
    <div className={props.className}>
      <svg
        viewBox={`0 0 ${rectSize} ${rectSize}`}
        width={rectSize}
        height={rectSize}
      >
        <filter id="drop-shadow">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <BgCircles
          center={rectSize * 0.5}
          stepCount={props.max}
          radius={props.size * 0.5}
        />
        <BgLines
          center={rectSize * 0.5}
          points={linesPoints}
        />
        <RadarPolygon points={radarPoints} />
        <RadarCircles points={radarPoints} radius={6} />
        <ItemTexts points={itemsPoints} />
      </svg>
    </div>
  )
}
