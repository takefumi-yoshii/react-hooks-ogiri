import {
  useState,
  useMemo,
  useEffect,
  RefObject
} from 'react'
import { times } from '../../../utils/index'
// ______________________________________________________
//
// @ Types

type State = {
  width: number
  height: number
}
type Props = {
  ref: RefObject<HTMLElement>
  verticalCount: number
  holizontalCount: number
}
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  width: 0,
  height: 0
})
// ______________________________________________________
//
// @ Hooks

const useTileContainer = (props: Props) => {
  const [rect, setRect] = useState(defaultState())
  useEffect(() => {
    const handleResize = () => {
      if (props.ref.current === null) return
      const {
        width,
        height
      } = props.ref.current.getBoundingClientRect()
      setRect({ width, height })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])
  const itemWidth = useMemo(
    () => rect.width / props.holizontalCount,
    [rect, props.holizontalCount]
  )
  const itemHeight = useMemo(
    () => rect.height / props.verticalCount,
    [rect, props.verticalCount]
  )
  const itemPoints = useMemo(
    () => {
      return times(props.verticalCount).map(index => {
        const y = index * itemHeight
        return times(props.holizontalCount).map(i => {
          return { x: i * itemWidth, y }
        })
      })
    },
    [itemWidth, itemHeight]
  )
  return {
    containerWidth: rect.width,
    containerHeight: rect.height,
    itemWidth,
    itemHeight,
    itemPoints
  }
}
// ______________________________________________________
//
// @ exports

export { useTileContainer }
