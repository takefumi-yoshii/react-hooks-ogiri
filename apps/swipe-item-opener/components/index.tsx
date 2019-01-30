import * as React from 'react'
import styled from 'styled-components'
import { getTimeLabel } from '../../utils/index'
import { useMailFetcher } from './useMailFetcher'
import Item from './item/index'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const { state } = useMailFetcher()
  if (!state.fetched) return <div>loading...</div>
  if (state.error) return <div>Error!</div>
  return (
    <div className={props.className}>
      {state.items.map(data => (
        <Item
          key={data.id}
          title={data.title}
          dateLabel={getTimeLabel(data.date)}
          body={data.body}
        />
      ))}
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > * {
    border-bottom: 1px solid #ccc;
  }
`
