import {
  useState,
  useMemo,
  useEffect,
  useCallback,
  RefObject
} from 'react'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  canplay: boolean
  pause: boolean
  playing: boolean
}
type Options = {
  width: number
  height: number
}
type Props = {
  videoRef: RefObject<HTMLVideoElement>
} & Partial<Options>
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  canplay: false,
  pause: false,
  playing: false
})
const defaultOptions = (): Options => ({
  width: 1280,
  height: 640
})
// ______________________________________________________
//
// @ Hooks

function useVideo(props: Props) {
  const [state, update] = useState<State>(
    merge(defaultState(), {})
  )
  const options = useMemo(
    (): Options =>
      merge(defaultOptions(), {
        width: props.width,
        height: props.height
      }),
    [props.width, props.height]
  )
  useEffect(() => {
    ;(async () => {
      const { mediaDevices } = navigator
      const video = props.videoRef.current
      if (mediaDevices && video !== null) {
        const stream = await mediaDevices.getUserMedia({
          video: {
            width: options.width,
            height: options.height
          },
          audio: false
        })
        video.srcObject = stream
        video.oncanplay = () => {
          update(_state => ({ ..._state, canplay: true }))
        }
        video.onplay = () => {
          update(_state => ({
            ..._state,
            playing: true,
            pause: false
          }))
        }
        video.onpause = () => {
          update(_state => ({
            ..._state,
            playing: false,
            pause: true
          }))
        }
      }
    })()
  }, [])
  const handlePlay = useCallback(
    () => {
      const video = props.videoRef.current
      if (video === null) return
      video.play()
    },
    [props.videoRef]
  )
  const handlePause = useCallback(
    () => {
      const video = props.videoRef.current
      if (video === null) return
      video.pause()
    },
    [props.videoRef]
  )
  return {
    state,
    handlePlay,
    handlePause
  }
}
// ______________________________________________________
//
// @ exports

export { useVideo }
