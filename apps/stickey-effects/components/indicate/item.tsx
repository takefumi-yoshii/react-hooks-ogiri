import * as React from 'react'
import { useContext, useMemo, CSSProperties } from 'react'
import styled from 'styled-components'
import * as styles from '../../../styles'
import { CTX } from '../context'

// ______________________________________________________
//
// @ Types

type Props = {
  index: number
  style: CSSProperties
  className?: string
}
type ContainerProps = {
  index: number
}
// ______________________________________________________
//
// @ View

const View: React.FC<Props> = props => (
  <span className={props.className} style={props.style} />
)
// ______________________________________________________
//
// @ StyledView

const radius = 6
const StyledView = styled(View)`
  width: ${radius}px;
  height: ${radius}px;
  border-radius: ${radius}px;
  display: block;
  margin: 6px 12px;
  border: 1px solid ${styles.blue};
  transition-duration: 0.2s;
`
// ______________________________________________________
//
// @ Container

export default (props: ContainerProps) => {
  const { current } = useContext(CTX)
  const isCurrent = useMemo(() => current === props.index, [
    current
  ])
  const style = useMemo(
    () =>
      isCurrent
        ? {
            transform: 'scale(1.5)',
            backgroundColor: styles.blue
          }
        : {
            transform: 'scale(1)'
          },
    [isCurrent]
  )
  return useMemo(
    () => <StyledView index={props.index} style={style} />,
    [style]
  )
}
