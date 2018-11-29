import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import { times } from '../../../../../utils/index'
import Item from './item'

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

const View = (props: Props) =>
  useMemo(
    () => (
      <div className={props.className}>
        {times(props.count).map(index => (
          <Item key={index} title={`title${index}`} />
        ))}
      </div>
    ),
    [props.count]
  )
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding-top: 60px;
`
