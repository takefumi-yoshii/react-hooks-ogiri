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

const useStickeyImageLoader = (props: Props) => {
  const [state, update] = useState({
    img: new Image(),
    loaded: false,
    loadCompleted: false
  })
  const handleEnter = useCallback(
    () => {
      state.img.onload = () =>
        update(_state => ({ ..._state, loaded: true }))
      state.img.src = props.imgPath
    },
    [state.img]
  )
  const handleLeave = useCallback(() => {
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
    handleEnter,
    handleLeave,
    handleLoadCompleted
  }
}
// ______________________________________________________
//
// @ exports

export { useStickeyImageLoader }
