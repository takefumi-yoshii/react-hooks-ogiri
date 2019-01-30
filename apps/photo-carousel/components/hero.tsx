import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Indicate from '../../components/indicate'
import PhotoCarousel from './photoCarousel/index'
import Images from '../assets/index'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [current, setCurrent] = useState(0)
  return (
    <div className={props.className}>
      <PhotoCarousel
        images={Images}
        imageRatio={0.66}
        transitionInterval={4000}
        transitionDuration={400}
        onChangeCurrent={setCurrent}
      />
      <div className="indicate">
        <Indicate
          current={current}
          color="light"
          count={Images.length}
        />
      </div>
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  position: relative;
  > .indicate {
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: 0;
  }
`
