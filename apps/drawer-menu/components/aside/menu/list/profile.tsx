import * as React from 'react'
import DrillDown from './drillDown/index'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ View

export default () => (
  <DrillDown
    title={'Profile'}
    icon={
      <SVGInline svg={require('../assets/profile.svg')} />
    }
    items={[
      { title: 'Accounts', onClick: () => {} },
      { title: 'Medias', onClick: () => {} },
      { title: 'Bookmarks', onClick: () => {} }
    ]}
  />
)
