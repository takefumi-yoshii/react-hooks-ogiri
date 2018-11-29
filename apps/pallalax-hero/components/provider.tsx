import * as React from 'react'
import { useState } from 'react'
import { CTX } from './context'
const { Provider } = CTX
// ______________________________________________________
//
// @ Types

type Props = { children?: React.ReactNode }

// ______________________________________________________
//
// @ View

export default (props: Props) => {
  const [coefficient, updateCoefficient] = useState(1)
  return (
    <Provider value={{ coefficient, updateCoefficient }}>
      {props.children}
    </Provider>
  )
}
