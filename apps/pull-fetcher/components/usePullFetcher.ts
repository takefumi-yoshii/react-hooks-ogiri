import {
  useState,
  useEffect,
  useCallback,
  TouchEvent
} from 'react'
import { wait } from '../../utils/index'
import { getMailItems, Mail } from '../mail'

// ______________________________________________________
//
// @ Types

type State = {
  items: Mail[]
  fetched: boolean
  isTop: boolean
  isTouching: boolean
  startY: number
  offsetY: number
  threshold: number
  error?: Error
}
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  items: [],
  fetched: false,
  isTop: true,
  isTouching: false,
  startY: 0,
  offsetY: 0,
  threshold: 20
})
// ______________________________________________________
//
// @ Hooks

function usePullFetcher() {
  const [state, update] = useState<State>(defaultState())
  const handleTouchDown = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => ({ ..._state, isTouching: true }))
    },
    []
  )
  const handleTouchUp = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => {
        const offsetY =
          _state.offsetY > 0 ? _state.threshold : 0
        const fetched = offsetY === 0
        return {
          ..._state,
          fetched,
          isTouching: false,
          offsetY
        }
      })
    },
    []
  )
  const handleTouchMove = useCallback(
    (event: TouchEvent<HTMLElement>) => {
      event.persist()
      update(_state => {
        if (!_state.isTop) return _state
        const y = event.touches[0].clientY - _state.startY
        const offsetY = y > 0 ? _state.threshold : 0
        const startY = event.touches[0].clientY
        return {
          ..._state,
          isTouching: true,
          startY,
          offsetY
        }
      })
    },
    []
  )
  useEffect(() => {
    const handleScroll = () => {
      update(_state => {
        const isTop = window.scrollY === 0
        return { ..._state, isTop }
      })
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(
    () => {
      ;(async () => {
        if (state.fetched) return
        try {
          await wait(400)
          const newItems = getMailItems(1)
          const items = [
            ...state.items,
            ...newItems.map(item => ({
              ...item,
              date: new Date(item.date)
            }))
          ].sort(
            (a, b) => b.date.getTime() - a.date.getTime()
          )
          update(_state => ({
            ..._state,
            fetched: true,
            offsetY: 0,
            items
          }))
        } catch (error) {
          update(_state => ({
            ..._state,
            fetched: true,
            offsetY: 0,
            error
          }))
        }
      })()
    },
    [state.fetched]
  )
  return {
    state,
    handleTouchDown,
    handleTouchUp,
    handleTouchMove
  }
}
// ______________________________________________________
//
// @ exports

export { usePullFetcher, State }
