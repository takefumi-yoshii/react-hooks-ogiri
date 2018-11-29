import * as React from 'react'
import styled from 'styled-components'
import { times } from '../../../utils/index'
import Section from './section'

// ______________________________________________________
//
// @ Types

type Props = {
  count: number
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    {times(props.count).map(index => (
      <Section
        key={index}
        index={index}
        title={`section${index}`}
        isFirst={index === 0}
        isLast={index === props.count - 1}
      />
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)``
