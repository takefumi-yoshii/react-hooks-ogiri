import { useState, useEffect } from 'react'
import { getMailItems, Mail } from '../mail'
// ______________________________________________________
//
// @ Types

type State = {
  items: Mail[]
  fetched: boolean
  error?: Error
}
// ______________________________________________________
//
// @ Defaults

const defaultState = (): State => ({
  items: [],
  fetched: false
})
// ______________________________________________________
//
// @ Hooks

function useMailFetcher() {
  const [state, update] = useState<State>(defaultState())
  useEffect(
    () => {
      if (!state.fetched) {
        try {
          const items = getMailItems(10)
          update(_state => ({
            ..._state,
            fetched: true,
            items: items.map(item => ({
              ...item,
              date: new Date(item.date)
            }))
          }))
        } catch (error) {
          update(_state => ({
            ..._state,
            fetched: true,
            error
          }))
        }
      }
    },
    [state.fetched]
  )
  return { state }
}
// ______________________________________________________
//
// @ exports

export { useMailFetcher }
