import React from 'react'
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <RouteToAbout />
          </Route>

          <Route path="/contact">
            <RouteToContact />
          </Route>

          <Route path="/journey">
            <RouteToJourney />
          </Route>

          <Route path="/portfolio">
            <RouteToPortfolio />
          </Route>

          <Route path="/">
            <RouteToHome />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
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
  @media (max-width: 500px) {
    display:table-cell;
  }
  flex-direction: column;
`

export default App

function RouteToHome() {
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

function RouteToAbout() {
  return <h1>Hi</h1>;
}

function RouteToContact() {
  return <h1>Hi</h1>;
}

function RouteToJourney() {
  return <h1>Hi</h1>;
}

function RouteToPortfolio() {
  return <h1>Hi</h1>;
}