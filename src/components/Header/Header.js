import React from 'react'
import { Img, Main, H1, H4, Container } from './styled'
import Logo from '../../assets/logo.png'

 const Header = () => {
  return (
    <Main>
        <Img alt="Logomarca" src={Logo} />
        <H1>Covid Daily Cases</H1>
        <Container>
        <H4>About Us</H4>
        <H4>Contact</H4>
        <H4>Privacy</H4>
        </Container>
    </Main>
  )
}

export default Header