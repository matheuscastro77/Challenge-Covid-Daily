import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Main, Container, Tittle, H1, H2, Button } from './styled'


const Home = () => {

  const navigate = useNavigate()

  return (
    <Main>
      <Header />
      <Container>
      <Tittle>
      <H1>
      Global information about COVID
      </H1>
      <H2>
      Get results by region and time period. 
      A fully functional and specific system
      </H2>
      <Button onClick={() => navigate('/map') ()}>Acess</Button>
      </Tittle>
      
      </Container>
    </Main>
  )
}

export default Home