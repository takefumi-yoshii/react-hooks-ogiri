import { createContext } from 'react'
import { UpdateState } from '../../types/hooks'

export const CTX = createContext({} as {
  coefficient: number
  updateCoefficient: UpdateState<number>
})
