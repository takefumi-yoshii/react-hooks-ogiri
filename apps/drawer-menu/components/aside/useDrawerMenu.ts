import { useState, useMemo, useCallback } from 'react'
// @ts-ignore
import merge from 'lodash.merge'
// ______________________________________________________
//
// @ Types

type Options = {
  width: number
  transitionDuration: number
}
type Props = Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultOptions = (): Options => ({
  width: 240,
  transitionDuration: 200
})
// ______________________________________________________
//
// @ Hooks

const useDrawerMenu = (props: Props) => {
  const [opened, toggleOpened] = useState(false)
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        width: props.width,
        transitionDuration: props.transitionDuration
      }),
    [props.width, props.transitionDuration]
  )
  const nodeStyle = useMemo(
    () => ({
      width: opened ? '100vw' : '0px'
    }),
    [opened]
  )
  const containerStyle = useMemo(
    () => ({
      width: `${options.width}px`,
      left: opened ? `0px` : `${options.width * -1}px`,
      transitionDuration: `${options.transitionDuration /
        1000}s`
    }),
    [options.width, options.transitionDuration, opened]
  )
  const handleToggleOpen = useCallback(
    () => toggleOpened(!opened),
    [opened]
  )
  return {
    opened,
    nodeStyle,
    containerStyle,
    handleToggleOpen
  }
}
// ______________________________________________________
//
// @ exports

export { useDrawerMenu }
