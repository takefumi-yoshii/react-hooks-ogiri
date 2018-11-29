import { createContext } from 'react'
import { useVideo } from './useVideo'
import { useCapture } from './useCapture'

export const VideoContext = createContext({} as ReturnType<
  typeof useVideo
>)
export const CaptureContext = createContext(
  {} as ReturnType<typeof useCapture>
)
