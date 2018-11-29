import * as React from 'react'
import Provider from './provider'
import Sections from './sections/index'
import Indicate from './indicate/index'

// ______________________________________________________
//
// @ View

const count = 5
export default () => (
  <Provider>
    <Sections count={count} />
    <Indicate count={count} />
  </Provider>
)
