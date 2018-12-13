import {
  useState,
  useCallback,
  useEffect,
  useMemo,
  RefObject
} from 'react'
import { getRecords } from './records'

// ______________________________________________________
//
// @ Types

type Props = {
  ref: RefObject<HTMLDivElement>
  padding: number
  centerCircleRadius: number
}
// ______________________________________________________
//
// @ View

const usePieChart = (props: Props) => {
  const [{ records, totalPoint }] = useState(getRecords())
  const [progress, updateProgress] = useState(0)
  const rectSize = useMemo(
    () => {
      if (props.ref.current === null) return 0
      const {
        width,
        height
      } = props.ref.current.getBoundingClientRect()
      return width > height ? height : width
    },
    [props.ref.current]
  )
  const padding = useMemo(
    () => {
      return rectSize * props.padding
    },
    [rectSize, props.padding]
  )
  const size = useMemo(
    () => {
      return rectSize - padding * 2
    },
    [rectSize, padding]
  )
  const centerCircleRadius = useMemo(
    () => {
      return rectSize * props.centerCircleRadius
    },
    [rectSize, props.centerCircleRadius]
  )
  const handleUpdate = useCallback(() => {
    updateProgress(prev => {
      if (prev >= 1) return 1
      return prev + 0.01
    })
  }, [])
  useEffect(
    () => {
      let interval: any
      if (progress !== 1) {
        interval = setInterval(handleUpdate, 8)
      }
      return () => clearInterval(interval)
    },
    [progress]
  )
  return {
    rectSize,
    size,
    padding,
    centerCircleRadius,
    records,
    totalPoint,
    progress
  }
}
// ______________________________________________________
//
// @ exports

export { usePieChart }
