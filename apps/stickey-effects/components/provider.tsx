import * as React from 'react'
import { useState } from 'react'
import { CTX } from './context'
// ______________________________________________________
//
// @ View

const Provider: React.FC<{}> = props => {
  const [current, setCurrent] = useState(0)
  return (
    <CTX.Provider value={{ current, setCurrent }}>
      {props.children}
    </CTX.Provider>
  )
}

export default Provider
