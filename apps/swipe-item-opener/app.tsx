import 'whatwg-fetch'
import * as React from 'react'
import { render } from 'react-dom'
import Root from './components/index'
import SmartPhone from '../components/notificate/smartPhone'

if (window.ontouchstart === null) {
  render(<Root />, document.getElementById('app'))
} else {
  render(<SmartPhone />, document.getElementById('app'))
}
