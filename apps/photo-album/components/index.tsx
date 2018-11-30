import * as React from 'react'
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

export default (props: Props) => (
  <>
    <Items />
    <Footer />
  </>
)
