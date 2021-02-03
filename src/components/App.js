import React from 'react'
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';


const App = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Home />
        <Footer />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div`
  background: #000;
  width: 100%;
  height:100%;
  display:flex;
  flex-direction: column;
`

export default App
