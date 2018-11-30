import { useCallback, useState } from 'react'

// ______________________________________________________
//
// @ Types

type Props = {
  imgPath: string
}
// ______________________________________________________
//
// @ Container

const useImageLoader = (props: Props) => {
  const [state, update] = useState({
    img: new Image(),
    loaded: false,
    loadCompleted: false
  })
  const handleLoadStart = useCallback(
    () => {
      state.img.onload = () =>
        update(_state => ({ ..._state, loaded: true }))
      state.img.src = props.imgPath
    },
    [state.img]
  )
  const handleDispose = useCallback(() => {
    update(_state => ({
      ..._state,
      img: new Image(),
      loaded: false,
      loadCompleted: false
    }))
  }, [])
  const handleLoadCompleted = useCallback(() => {
    update(_state => ({
      ..._state,
      loadCompleted: true
    }))
  }, [])
  return {
    state,
    handleLoadStart,
    handleDispose,
    handleLoadCompleted
  }
}
// ______________________________________________________
//
// @ exports

export { useImageLoader }
