import React from 'react'
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>
        </nav> */}
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <RouteToAbout />
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