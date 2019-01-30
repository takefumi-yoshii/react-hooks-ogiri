import * as React from 'react'
import styled from 'styled-components'
import Assets from '../assets/index'
import Item from './item/index'
import Photo from './item/photo'
import Description from './item/description'

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
        render={({
          imgSrc,
          loaded,
          loadCompleted,
          handleLoadCompleted
        }) => (
          <>
            <Photo
              imgSrc={imgSrc}
              loaded={loaded}
              loadCompleted={loadCompleted}
              onTransitionEnd={handleLoadCompleted}
            />
            <Description
              title={asset.title}
              body={asset.body}
            />
          </>
        )}
      />
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  > * {
    padding: 16px;
    border-bottom: 1px solid #eee;
    &:last-child {
      border-bottom: none;
    }
  }
`
