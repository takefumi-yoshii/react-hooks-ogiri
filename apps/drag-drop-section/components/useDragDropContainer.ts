import {
  useState,
  useCallback,
  useEffect,
  MouseEvent,
  TouchEvent
} from 'react'
// @ts-ignore
import throttle from 'lodash.throttle'
import { Record } from './records'
// ______________________________________________________
//
// @ Types

type Point = {
  x: number
  y: number
}
type State = {
  isMouseDown: boolean
  target: {
    index: number
    startRectPoint: Point
    pointOffset: Point
    startMousePoint: Point
  }
  elementsIndex: number[]
  hitPoints: Point[]
  hitIndex: number
  prevHitIndex: number
}
type Props = {
  records: Record[]
  top: number
  left: number
  itemWidth: number
  itemHeight: number
}
type HandleStartProps = {
  index: number
  startRectPoint: Point
  startMousePoint: Point
}
type HandleMoveProps = {
  center: Point
  pointOffset: Point
}
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  isMouseDown: false,
  target: {
    index: -1,
    startRectPoint: { x: 0, y: 0 },
    pointOffset: { x: 0, y: 0 },
    startMousePoint: { x: 0, y: 0 }
  },
  elementsIndex: [],
  hitPoints: [],
  hitIndex: -1,
  prevHitIndex: -1
})
// ______________________________________________________
//
// @ Hooks

const useDragDropContainer = (props: Props) => {
  const [state, update] = useState<State>({
    ...defaultState(),
    ...{
      elementsIndex: props.records.map(
        (record, index) => index
      ),
      hitPoints: props.records.map((record, index) => {
        const x = props.left + props.itemWidth * 0.5
        const y =
          index * props.itemHeight +
          props.top +
          props.itemHeight * 0.5
        return { x, y }
      })
    }
  })
  useEffect(
    () => {
      update(_state => ({
        ..._state,
        hitPoints: props.records.map((record, index) => {
          const x = props.left + props.itemWidth * 0.5
          const y =
            index * props.itemHeight +
            props.top +
            props.itemHeight * 0.5
          return { x, y }
        })
      }))
    },
    [props.itemWidth]
  )
  const handleStart = useCallback(
    (props: HandleStartProps) => {
      update(_state => {
        return {
          ..._state,
          target: {
            ..._state.target,
            ...props
          },
          isMouseDown: true,
          hitIndex: props.index,
          prevHitIndex: props.index
        }
      })
    },
    []
  )
  const handleMouseDownElement = useCallback(
    (event: MouseEvent<HTMLElement>, index: number) => {
      event.persist()
      const {
        top,
        left
      } = (event.target as HTMLElement).getBoundingClientRect()
      handleStart({
        index,
        startRectPoint: { x: left, y: top },
        startMousePoint: {
          x: event.pageX,
          y: event.pageY
        }
      })
    },
    [state.isMouseDown]
  )
  const handleTouchStartElement = useCallback(
    (event: TouchEvent<HTMLElement>, index: number) => {
      event.persist()
      const {
        top,
        left
      } = (event.target as HTMLElement).getBoundingClientRect()
      handleStart({
        index,
        startRectPoint: { x: left, y: top },
        startMousePoint: {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        }
      })
    },
    [state.isMouseDown]
  )
  const handleMove = useCallback(
    ({ center, pointOffset }: HandleMoveProps) => {
      update(_state => {
        if (!_state.isMouseDown) return _state
        const hitIndex = _state.hitPoints
          .map(
            point =>
              Math.sqrt(
                Math.pow(center.x - point.x, 2) +
                  Math.pow(center.y - point.y, 2)
              ) <
              props.itemHeight * 0.5
          )
          .findIndex(flag => flag)
        return {
          ..._state,
          target: { ..._state.target, pointOffset },
          hitIndex:
            hitIndex === -1 ? _state.hitIndex : hitIndex
        }
      })
    },
    [state.isMouseDown]
  )
  const handleTouchMoveElement = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      const {
        top,
        left,
        width,
        height
      } = (event.target as HTMLElement).getBoundingClientRect()
      const pointOffset = {
        x:
          event.touches[0].clientX -
          state.target.startMousePoint.x,
        y:
          event.touches[0].clientY -
          state.target.startMousePoint.y
      }
      const center = {
        x: left + width * 0.5,
        y: top + height * 0.5
      }
      handleMove({ center, pointOffset })
    },
    [state.isMouseDown, state.target]
  )
  const handleMouseMoveElement = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.persist()
      const {
        top,
        left,
        width,
        height
      } = (event.target as HTMLElement).getBoundingClientRect()
      const pointOffset = {
        x: event.pageX - state.target.startMousePoint.x,
        y: event.pageY - state.target.startMousePoint.y
      }
      const center = {
        x: left + width * 0.5,
        y: top + height * 0.5
      }
      handleMove({ center, pointOffset })
    },
    [state.isMouseDown, state.target]
  )
  useEffect(
    () => {
      update(_state => {
        const direction =
          _state.hitIndex - _state.prevHitIndex
        if (direction === 0) return _state
        const elementsIndex = [..._state.elementsIndex]
        const index = elementsIndex.findIndex(
          index => index === _state.target.index
        )
        const item = elementsIndex[index]
        if (direction === -1) {
          elementsIndex.splice(_state.hitIndex, 0, item)
          elementsIndex.splice(
            elementsIndex.lastIndexOf(item),
            1
          )
        } else {
          elementsIndex.splice(index, 1)
          elementsIndex.splice(_state.hitIndex, 0, item)
        }
        return {
          ..._state,
          elementsIndex,
          prevHitIndex: _state.hitIndex
        }
      })
    },
    [state.hitIndex]
  )
  const handleEndMove = useCallback(() => {
    update(_state => {
      if (_state.target.index === -1) return _state
      return {
        ..._state,
        isMouseDown: false,
        target: {
          index: -1,
          startRectPoint: { x: 0, y: 0 },
          pointOffset: { x: 0, y: 0 },
          startMousePoint: { x: 0, y: 0 }
        }
      }
    })
  }, [])
  const handleTouchEndElement = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      handleEndMove()
    },
    []
  )
  const handleMouseUpElement = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.persist()
      handleEndMove()
    },
    []
  )
  return {
    isMouseDown: state.isMouseDown,
    target: state.target,
    elementsIndex: state.elementsIndex,
    handleMouseDownElement,
    handleMouseMoveElement,
    handleMouseUpElement,
    handleTouchStartElement,
    handleTouchMoveElement,
    handleTouchEndElement
  }
}
// ______________________________________________________
//
// @ exports

export { useDragDropContainer }
