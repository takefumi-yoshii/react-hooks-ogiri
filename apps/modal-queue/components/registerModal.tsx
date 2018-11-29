import * as React from 'react'
import Modal from './modal/index'

// ______________________________________________________
//
// @ Types

type Props = {
  createdAt: Date
  message: string
  handleClose: () => void
}
// ______________________________________________________
//
// @ Helpers

const registerModal = (props: Props) => (
  <Modal
    createdAt={props.createdAt}
    handleClose={props.handleClose}
    message={props.message}
    bgColor={'rgba(0,0,0,.5)'}
  />
)
// ______________________________________________________
//
// @ exports

export { registerModal }
