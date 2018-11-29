import * as React from 'react'
import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { UpdateState } from '../../types/hooks'
import Aside from './aside/index'
import Body from './body/index'
import Footer from '../../components/pixabayFooter'

// ______________________________________________________
//
// @ Types

type Props = {
  opend: boolean
  toggleOpened: UpdateState<boolean>
  mainStyle: { opacity: number; transform: string }
  className?: string
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <div className={props.className}>
    <main style={props.mainStyle}>
      <Body />
      <Footer />
    </main>
    <aside>
      <Aside handleChangeOpened={props.toggleOpened} />
    </aside>
  </div>
)
// ______________________________________________________
//
// @ StyledView

const StyledView = styled(View)`
  padding-top: 60px;
  > main {
    transition-duration: 0.2s;
    transform: translateX(0);
  }
`
// ______________________________________________________
//
// @ Container

export default () => {
  const [opened, toggleOpened] = useState(false)
  const mainStyle = useMemo(
    () => ({
      opacity: opened ? 0 : 1,
      transform: opened
        ? `translateX(10px)`
        : `translateX(0)`
    }),
    [opened]
  )
  return (
    <StyledView
      opend={opened}
      toggleOpened={toggleOpened}
      mainStyle={mainStyle}
    />
  )
}
