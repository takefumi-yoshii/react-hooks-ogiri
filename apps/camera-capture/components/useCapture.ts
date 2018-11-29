import {
  useState,
  useCallback,
  ChangeEvent,
  RefObject
} from 'react'
import { saveCanvas } from '../../utils/saveCanvas'
// @ts-ignore
import merge from 'lodash.merge'

// ______________________________________________________
//
// @ Types

type State = {
  fileName: string
}
type Props = {
  videoRef: RefObject<HTMLVideoElement>
  canvasRef: RefObject<HTMLCanvasElement>
  width: number
  height: number
} & Partial<State>
// ______________________________________________________
//
// @ Hooks

function useCapture(props: Props) {
  const [state, update] = useState<State>({
    fileName: props.fileName || ''
  })
  const handleSetFileName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      update(_state => ({ ..._state, fileName: value }))
    },
    [state.fileName]
  )
  const handleCapture = useCallback(
    () => {
      const canvas = props.canvasRef.current
      const video = props.videoRef.current
      if (canvas === null || video === null) return
      const context = canvas.getContext('2d')
      if (context === null) return
      context.drawImage(
        video,
        0,
        0,
        props.width,
        props.height
      )
    },
    [
      props.canvasRef,
      props.videoRef,
      props.width,
      props.height
    ]
  )
  const handleSave = useCallback(
    () => {
      const canvas = props.canvasRef.current
      if (canvas === null) return
      saveCanvas({
        canvas,
        fileName: state.fileName
      })
    },
    [props.canvasRef, state.fileName]
  )
  return {
    state,
    canvasRef: props.canvasRef,
    videoRef: props.videoRef,
    width: props.width,
    height: props.height,
    handleSetFileName,
    handleCapture,
    handleSave
  }
}
// ______________________________________________________
//
// @ exports

export { useCapture }
