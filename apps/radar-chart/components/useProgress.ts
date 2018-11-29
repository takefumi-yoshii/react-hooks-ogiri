import { useState, useCallback, useEffect } from 'react'

// ______________________________________________________
//
// @ Hooks

const useProgress = (duration: number = 1000) => {
  const [progress, updateProgress] = useState(0)
  const handleUpdate = useCallback(() => {
    updateProgress(prev => {
      if (prev >= 1) return 1
      return prev + 10 / duration
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
    progress
  }
}
// ______________________________________________________
//
// @ exports

export { useProgress }
