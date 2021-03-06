import React from 'react'
import styled from "styled-components";
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Post from './Post';
import BlackState from '../pageState';
import MobileMenu from '../components/MobileMenu'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Blog from './Blog';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Journey from './Journey';

const App = () => {
  BlackState.isMobileMenuShown = false
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

          <Route path="/blog">
            <RouteToBlog />
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
    
  }
  flex-direction: column;
`

export default App

function RouteToHome() {
  BlackState.pageTitle = 'Home'
  return (
    <Container>
      <Wrapper>
        <Header />
        <Home />
        <MobileMenu />
        <Footer />
      </Wrapper>
    </Container>
  )
}

function RouteToAbout() {
  BlackState.pageTitle = 'About'
  BlackState.specialPost = 'about'
  return (
    <Container>
      <Wrapper>
        <Header />
        {/* <h1>About me</h1> */}
        <Post />
        <MobileMenu />
        <Footer />
      </Wrapper>
    </Container>
  )
}

function RouteToContact() {
  BlackState.pageTitle = 'Contact'
  return (
    <Container>
      <Wrapper>
        <Header />
          <Contact />
          <MobileMenu />
        <Footer />
      </Wrapper>
    </Container>
  )
}

function RouteToJourney() {
  BlackState.pageTitle = 'Journey'
  return (
    <Container>
      <Wrapper>
        <Header />
        <Journey />
        <MobileMenu />
        <Footer />
      </Wrapper>
    </Container>
  )
}

function RouteToPortfolio() {
  BlackState.pageTitle = 'Portfolio'
  return (
    <Container>
      <Wrapper>
        <Header />
        <Portfolio />
        <MobileMenu />
        <Footer />
      </Wrapper>
    </Container>
  )
}

function RouteToBlog() {
  let match = useRouteMatch();
  BlackState.pageTitle = 'Blog'
  return (
    <Container>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <RouteToArticle />
        </Route>
        <Route path={match.path}>
          <Wrapper>
            <Header />
              <Blog />
              <MobileMenu />
            <Footer />
          </Wrapper>
        </Route>
      </Switch>
    </Container>
  )
}

function RouteToArticle() {
  BlackState.pageTitle = 'Blog'
  return (
    <Container>
      <Wrapper>
        <Header />
        <Post />
        <MobileMenu />
        <Footer />
      </Wrapper>
    </Container>
  )
}