import * as React from 'react'
import styled from 'styled-components'
import { times } from '../utils/index'
// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
  scale: number
}

// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <div className={props.className}>
    {times(12).map(index => (
      <div key={index} />
    ))}
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  color: official;
  display: inline-block;
  position: relative;
  width: ${props => `${props.scale * 64}px`};
  height: ${props => `${props.scale * 64}px`};
  > div {
    transform-origin: ${props =>
      `${props.scale * 32}px ${props.scale * 32}px`};
    animation: lds-spinner 1.2s linear infinite;
  }
  > div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: ${props => `${props.scale * 3}px`};
    left: ${props => `${props.scale * 29}px`};
    width: ${props => `${props.scale * 5}px`};
    height: ${props => `${props.scale * 14}px`};
    border-radius: 20%;
    background: #fff;
  }
  > div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  > div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  > div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  > div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  > div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  > div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  > div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  > div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  > div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  > div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  > div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  > div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
