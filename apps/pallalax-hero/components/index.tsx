import * as React from 'react'
import styled from 'styled-components'
import Provider from './provider'
import Head from './head/index'
import Wrapper from './wrapper'
import Body from './body/index'
import Footer from '../../components/pixabayFooter'
// ______________________________________________________
//
// @ Types

type Props = {
  className?: string
  children?: React.ReactNode
}
// ______________________________________________________
//
// @ View

const View = (props: Props) => (
  <>
    <Provider>
      <Wrapper className={props.className}>
        <Head
          title={'Entry Title'}
          subTitle={'subTitle'}
          avatorImgSrc={require('../assets/avator.jpg')}
          bgImgSrc={require('../assets/hero.jpg')}
          bgColor={'#004c94'}
        />
      </Wrapper>
    </Provider>
    <Body />
    <Footer />
  </>
)
// ______________________________________________________
//
// @ StyledView

export default styled(View)`
  padding-top: 210px;
`
