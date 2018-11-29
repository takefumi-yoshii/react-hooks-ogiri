import { createContext } from 'react'
import { UpdateState } from '../../types/hooks'
export const CTX = createContext({} as {
  current: number
  setCurrent: UpdateState<number>
})
