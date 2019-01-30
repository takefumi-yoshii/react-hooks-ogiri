import * as React from 'react'
import styled from 'styled-components'
import Container from './container'
import Loading from './loading'
import Items from './items/index'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <Container
    render={state => (
      <div className={props.className}>
        <Loading fetched={state.fetched} />
        <div
          className="container"
          style={{
            paddingTop: `${state.offsetY}px`,
            transitionDuration: '.3s'
          }}
        >
          <h3>item count: {state.items.length}</h3>
          <Items items={state.items} />
        </div>
      </div>
    )}
  />
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .container {
    position: relative;
    > h3 {
      padding-top: 30px;
      color: #fff;
    }
    > * {
      margin: 0px 15px 15px 15px;
    }
  }
`
