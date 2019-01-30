import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'
import Loading from './loading'

// ______________________________________________________
//
// @ Types

type Props = {
  imgSrc: string
  loaded: boolean
  loadCompleted: boolean
  onTransitionEnd: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {props.loaded && <p className="photo" />}
    {!props.loadCompleted &&
      useMemo(
        () => (
          <Loading
            loaded={props.loaded}
            onTransitionEnd={props.onTransitionEnd}
          />
        ),
        [props.loadCompleted, props.loaded]
      )}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding-top: 100%;
  position: relative;
  > .photo {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${props => props.imgSrc});
    background-size: cover;
    background-position: center;
  }
`
