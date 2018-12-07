import {
  createContext,
  Dispatch,
  SetStateAction
} from 'react'
export const CTX = createContext({} as {
  current: number
  setCurrent: Dispatch<SetStateAction<number>>
})
