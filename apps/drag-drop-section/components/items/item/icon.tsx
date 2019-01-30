import * as React from 'react'
import styled from 'styled-components'
// @ts-ignore
import SVGInline from 'react-svg-inline'

// ______________________________________________________
//
// @ Types

type Props = {
  priority: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {props.priority === 'high' && (
      <SVGInline svg={require(`./assets/high.svg`)} />
    )}
    {props.priority === 'middle' && (
      <SVGInline svg={require(`./assets/middle.svg`)} />
    )}
    {props.priority === 'low' && (
      <SVGInline svg={require(`./assets/low.svg`)} />
    )}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  margin: 10px;
`
