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
  const [current, setCurrent] = useState(0)
  return (
    <Provider value={{ current, setCurrent }}>
      {props.children}
    </Provider>
  )
}
