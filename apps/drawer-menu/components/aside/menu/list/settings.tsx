import * as React from 'react'
import DrillDown from './drillDown'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ View

export default () => (
  <DrillDown
    title={'Settings'}
    icon={
      <SVGInline svg={require('../assets/settings.svg')} />
    }
    onClickTitle={() => {}}
  />
)
