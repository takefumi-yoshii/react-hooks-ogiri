import * as React from 'react'
import DrillDown from './drillDown/index'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ View

export default () => (
  <DrillDown
    title={'Groups'}
    icon={<SVGInline svg={require('../assets/list.svg')} />}
    items={[
      { title: 'Group 1', onClick: () => {} },
      { title: 'Group 2', onClick: () => {} },
      { title: 'Group 3', onClick: () => {} },
      { title: 'Group 4', onClick: () => {} },
      { title: 'Group 5', onClick: () => {} }
    ]}
  />
)
