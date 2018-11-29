import * as React from 'react'
import { render } from 'react-dom'
import Root from './components/index'
import Laptop from '../components/notificate/laptop'

if (window.ontouchstart !== null) {
  render(<Root />, document.getElementById('app'))
} else {
  render(<Laptop />, document.getElementById('app'))
}
