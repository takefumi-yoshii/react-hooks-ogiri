import * as React from 'react'
import {
  useState,
  useEffect,
  MouseEvent,
  CSSProperties
} from 'react'
import styled from 'styled-components'
import Hero from './hero'
import Body from './body'
import Close from './close'

// ______________________________________________________
//
// @ Types

type Props = {
  title: string
  body: string
  photoStyle: CSSProperties
  photoComponent: JSX.Element
  transitionDuration: number
  handleClose: (event: MouseEvent<HTMLElement>) => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className={props.className}>
      <Hero
        title={props.title}
        photoStyle={props.photoStyle}
        photoComponent={props.photoComponent}
        mounted={mounted}
        transitionDuration={props.transitionDuration}
      />
      <Body
        body={props.body}
        mounted={mounted}
        transitionDuration={props.transitionDuration}
      />
      <Close
        mounted={mounted}
        transitionDuration={props.transitionDuration}
        handleClose={props.handleClose}
      />
    </div>
  )
}
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  z-index: 2;
`
