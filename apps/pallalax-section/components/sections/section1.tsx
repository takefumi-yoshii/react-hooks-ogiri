import * as React from 'react'
import styled from 'styled-components'
import PallalaxSection from './pallalaxSection'

// ______________________________________________________
//
// @ Types

type Props = { className?: string }
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <PallalaxSection
    className={props.className}
    toggleClassName={'inArea'}
    topThrethold={100}
  >
    <img src={require('./assets/1.jpg')} width="100%" />
    <h2>Rabbit</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Iste reiciendis voluptatum, cum in nulla dolore
      fugiat quis et id. Sunt minima culpa atque qui velit
      aliquid facilis, vero error ad!
    </p>
  </PallalaxSection>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  margin: 10px;
  padding: 20px;
  opacity: 0;
  transform: translateX(10px);
  transition-duration: 0.4s;
  box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.1);
  h2 {
    padding: 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  &.inArea {
    opacity: 1;
    transform: translateX(0px);
  }
`
