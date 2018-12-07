import {
  createContext,
  Dispatch,
  SetStateAction
} from 'react'

export const CTX = createContext({} as {
  coefficient: number
  updateCoefficient: Dispatch<SetStateAction<number>>
})
