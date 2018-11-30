import { useState, useMemo, RefObject } from 'react'
import { Record, getRecords } from './records'
import { useProgress } from './useProgress'
import { useWindowResize } from './useWindowResize'
import { getChartSrc } from './chartSrc'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  records: Record[]
  max: number
}
type Options = {
  padding: number
  itemLabelIeject: number
}
type Props = {
  ref: RefObject<HTMLDivElement>
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultOptions = (): Options => ({
  padding: 60,
  itemLabelIeject: 15
})
// ______________________________________________________
//
// @ View

const useRadarChart = (props: Props) => {
  const [resource] = useState<State>(getRecords())
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        padding: props.padding,
        itemLabelIeject: props.itemLabelIeject
      }),
    [props.padding, props.itemLabelIeject]
  )
  const { progress } = useProgress()
  const { size } = useWindowResize(() => {
    if (props.ref.current === null) return 0
    const {
      width
    } = props.ref.current.getBoundingClientRect()
    return width - options.padding * 2
  })
  const rectSize = useMemo(
    () => size + options.padding * 2,
    [size, options.padding]
  )
  const center = useMemo(() => rectSize * 0.5, [rectSize])
  const stepCount = useMemo(() => resource.max, [resource])
  const radius = useMemo(() => size * 0.5, [size])
  const { radarPoints, linesPoints, itemsPoints } = useMemo(
    () =>
      getChartSrc(
        resource.records,
        resource.max,
        size,
        center,
        progress,
        options.itemLabelIeject
      ),
    [resource, size, center, progress]
  )
  return {
    size,
    rectSize,
    center,
    radius,
    stepCount,
    radarPoints,
    linesPoints,
    itemsPoints
  }
}
// ______________________________________________________
//
// @ exports

export { useRadarChart }
