import * as React from 'react'
import { useState } from 'react'
import { CTX } from './context'
// ______________________________________________________
//
// @ View

const Provider: React.FC<{}> = props => {
  const [coefficient, updateCoefficient] = useState(1)
  return (
    <CTX.Provider value={{ coefficient, updateCoefficient }}>
      {props.children}
    </CTX.Provider>
  )
}

export default Provider
