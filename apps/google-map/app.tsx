import * as React from 'react'
import { render } from 'react-dom'
import Root from './components/index'
// @ts-ignore
import makeAsyncScriptLoader from 'react-async-script'
const URL = `https://maps.googleapis.com/maps/api/js?key=${
  process.env.GOOGLE_MAP_API_KEY
}`
const AsyncScriptRoot = makeAsyncScriptLoader(URL)(Root)
render(<AsyncScriptRoot />, document.getElementById('app'))
