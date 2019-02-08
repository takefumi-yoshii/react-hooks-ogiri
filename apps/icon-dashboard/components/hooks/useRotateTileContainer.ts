import { useMemo, RefObject } from 'react'
// @ts-ignore
import throttle from 'lodash.throttle'
// @ts-ignore
import merge from 'lodash.merge'
import { useTileContainer } from './useTileContainer'

// ______________________________________________________
//
// @ Types

type Options = {
  verticalCount: number
  holizontalCount: number
}
type Props = {
  ref: RefObject<HTMLElement>
} & Partial<Options>

// ______________________________________________________
//
// @ Defaults

const defaultOptions = (): Options => ({
  verticalCount: 6,
  holizontalCount: 4
})
// ______________________________________________________
//
// @ Hooks

const useRotateTileContainer = (props: Props) => {
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        verticalCount: props.verticalCount,
        holizontalCount: props.holizontalCount
      }),
    [props.verticalCount, props.holizontalCount]
  )
  const holizontalCount = useMemo(
    () => {
      if (window.orientation === undefined)
        return options.holizontalCount
      return window.orientation === 0
        ? options.holizontalCount
        : options.verticalCount
    },
    [window.orientation]
  )
  const verticalCount = useMemo(
    () => {
      if (window.orientation === undefined)
        return options.verticalCount
      return window.orientation === 0
        ? options.verticalCount
        : options.holizontalCount
    },
    [window.orientation]
  )
  const tileContainer = useTileContainer({
    ref: props.ref,
    verticalCount,
    holizontalCount
  })
  return {
    ...tileContainer,
    holizontalCount,
    verticalCount
  }
}
// ______________________________________________________
//
// @ exports

export { useRotateTileContainer }
