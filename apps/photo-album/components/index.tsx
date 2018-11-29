import * as React from 'react'
import styled from 'styled-components'
import Items from './items'
import Footer from '../../components/pixabayFooter'

// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    <Items />
    <Footer />
  </div>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)``
