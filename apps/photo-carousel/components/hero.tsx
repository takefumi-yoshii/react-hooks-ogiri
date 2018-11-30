import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Pagenate from '../../components/pagenate'
import PhotoCarousel from './photoCarousel/index'
import Images from '../assets/index'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View = (props: Props) => {
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
      <div className="pagenate">
        <Pagenate
          current={current}
          color="light"
          items={Images.map((p, i) => i)}
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
  > .pagenate {
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: 0;
  }
`
