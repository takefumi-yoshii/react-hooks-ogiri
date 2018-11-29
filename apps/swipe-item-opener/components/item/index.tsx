import * as React from 'react'
import styled from 'styled-components'
import SwipeItemOpener from './swipeItemOpener'
import Head from './head'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  dateLabel: string
  body: string
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <SwipeItemOpener
    render={opend => (
      <div className={props.className}>
        <Head
          title={props.title}
          dateLabel={props.dateLabel}
          opend={opend}
        />
        <div className="body">{props.body}</div>
      </div>
    )}
  />
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > .body {
    margin: 0;
    line-height: 1.4;
    font-size: 0.8rem;
    color: #666;
  }
`
