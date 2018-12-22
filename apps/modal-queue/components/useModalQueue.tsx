import { useState, useMemo, useCallback } from 'react'
import { registerModal } from './registerModal'
// ______________________________________________________
//
// @ Types

type State = {
  isOpen: boolean
  items: JSX.Element[]
}
// ______________________________________________________
//
// @ Hooks

const useModalQueue = () => {
  const [state, update] = useState<State>({
    isOpen: false,
    items: []
  })
  const renderModal = useMemo(() => state.items[0], [
    state.items
  ])
  const handleRegisterModal = useCallback(
    (value: string) => {
      const handleClose = () => {
        update(_state => {
          const items = [..._state.items]
          items.shift()
          const isOpen = items.length !== 0
          return { ..._state, items, isOpen }
        })
      }
      update(_state => {
        const newItem = registerModal({
          createdAt: new Date(),
          message: value,
          handleClose
        })
        const items = [..._state.items, newItem]
        return { ..._state, items }
      })
    },
    []
  )
  const handlePlayQueue = useCallback(() => {
    update(_state => ({
      ..._state,
      isOpen: !_state.isOpen
    }))
  }, [])
  return {
    state,
    renderModal,
    handleRegisterModal,
    handlePlayQueue
  }
}
// ______________________________________________________
//
// @ exports

export { useModalQueue }
