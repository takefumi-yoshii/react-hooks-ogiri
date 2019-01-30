import * as React from 'react'
import styled from 'styled-components'
import Assets from '../assets/index'
import Item from './item/index'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {Assets.map((asset, index) => (
      <Item
        key={index}
        imgPath={asset.imgPath}
        title={asset.title}
        body={asset.body}
      />
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding: 20px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  > * {
    flex-basis: 31.3%;
    margin: 1%;
  }
`
