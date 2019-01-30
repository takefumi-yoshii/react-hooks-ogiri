import * as React from 'react'
import {
  useContext,
  useMemo,
  useCallback,
  ChangeEvent
} from 'react'
import styled from 'styled-components'
import { saveCanvas } from '../../../utils/saveCanvas'
import { DrawableCanvasContext } from '../contexts'
import Input from './input'
import Button from './button'

// ______________________________________________________
//
// @ Types

type Props = {
  fileName: string
  onChangeFileName: (
    event: ChangeEvent<HTMLInputElement>
  ) => void
  onSubmit: () => void
  className?: string
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <form
    className={props.className}
    onSubmit={event => {
      event.preventDefault()
      props.onSubmit()
    }}
  >
    <Input
      fileName={props.fileName}
      onChangeFileName={props.onChangeFileName}
    />
    <Button fileName={props.fileName} />
  </form>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
`
// ______________________________________________________
//
// @ Container

export default () => {
  const {
    ref,
    fileName,
    handleChangeFileName
  } = useContext(DrawableCanvasContext)
  const handleSubmit = useCallback(
    () => {
      if (ref.current === null) return
      saveCanvas({
        canvas: ref.current,
        fileName
      })
    },
    [fileName]
  )
  return useMemo(
    () => (
      <StyledView
        fileName={fileName}
        onChangeFileName={handleChangeFileName}
        onSubmit={handleSubmit}
      />
    ),
    [fileName, handleChangeFileName, handleSubmit]
  )
}
