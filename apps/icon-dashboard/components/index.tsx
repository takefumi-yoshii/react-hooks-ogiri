import * as React from 'react'
import { records } from './records'
import Provider from './provider'
import Items from './items/index'

// ______________________________________________________
//
// @ View

export default () => (
  <Provider records={records}>
    <Items />
  </Provider>
)
