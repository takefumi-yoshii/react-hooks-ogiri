import { useState, useEffect } from 'react'

// ______________________________________________________
//
// @ Hooks

const useWindowResize = (callback: () => any) => {
  const [size, setSize] = useState(0)
  useEffect(() => {
    const handleResize = () => {
      setSize(callback)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () =>
      window.removeEventListener('resize', handleResize)
  }, [])
  return {
    size
  }
}
// ______________________________________________________
//
// @ exports

export { useWindowResize }
