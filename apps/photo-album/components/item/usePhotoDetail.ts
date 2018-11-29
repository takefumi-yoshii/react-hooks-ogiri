import {
  useState,
  useMemo,
  useCallback,
  MouseEvent
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type Options = {
  transitionDuration: number
}
type Props = Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultOptions = (): Options => ({
  transitionDuration: 400
})
// ______________________________________________________
//
// @ Hooks

const usePhotoDetail = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [defaultRect, setDefaultRect] = useState<
    Partial<DOMRect>
  >(null!)
  const [bgRect, setBgRect] = useState<Partial<DOMRect>>(
    null!
  )
  const [photoRect, setPhotoRect] = useState<
    Partial<DOMRect>
  >(null!)
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        transitionDuration: props.transitionDuration
      }),
    [props.transitionDuration]
  )
  const bgStyle = useMemo(
    () =>
      bgRect === null
        ? {}
        : {
            width: `${bgRect.width}px`,
            height: `${bgRect.height}px`,
            top: `${bgRect.top}px`,
            left: `${bgRect.left}px`
          },
    [bgRect]
  )
  const photoStyle = useMemo(
    () =>
      photoRect === null
        ? {}
        : {
            width: `${photoRect.width}px`,
            height: `${photoRect.height}px`,
            top: `${photoRect.top}px`,
            left: `${photoRect.left}px`
          },
    [photoRect]
  )
  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      event.preventDefault()
    },
    []
  )
  const handleOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect() as DOMRect
      window.addEventListener(
        'touchmove',
        handleTouchMove,
        { passive: false }
      )
      setDefaultRect(rect)
      setPhotoRect(rect)
      setBgRect(rect)
      setIsOpen(true)
      setTimeout(() => {
        setPhotoRect({
          width: window.innerWidth,
          height: window.innerWidth,
          top: 0,
          left: 0
        })
        setBgRect({
          width: window.innerWidth,
          height: window.innerHeight,
          top: 0,
          left: 0
        })
      }, 16)
      setTimeout(() => {
        setIsOpened(true)
      }, options.transitionDuration)
    },
    [bgRect, photoRect, options]
  )
  const handleClose = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setIsOpened(false)
      setTimeout(() => {
        setPhotoRect(defaultRect)
        setBgRect(defaultRect)
      }, 16)
      setTimeout(() => {
        setIsOpen(false)
        window.removeEventListener(
          'touchmove',
          handleTouchMove as any,
          { passive: false } as any
        )
      }, options.transitionDuration)
    },
    [bgRect, photoRect, options]
  )
  return {
    isOpen,
    isOpened,
    bgStyle,
    photoStyle,
    handleOpen,
    handleClose
  }
}
// ______________________________________________________
//
// @ exports

export { usePhotoDetail }
