import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'
import BlackState from '../pageState';
import logo from '../images/logo512.png';

const Header = () => {
    return (
        <Container>
            <div>
            <HamMenu onClick={show}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" class="mobile-menu_icon__1FO0U"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg></HamMenu>
            </div>
            <Menu>
                <Link id={isOnThis("Home")} class="nav-link" to="/">Home</Link>
                <Link id={isOnThis("About")} class="nav-link" to="/about">About</Link>
                <Link id={isOnThis("Contact")} class="nav-link" to="/contact">Contact</Link>
                <Link id={isOnThis("Journey")} class="nav-link" to="/journey">Journey</Link>
                <Link id={isOnThis("Portfolio")} class="nav-link" to="/portfolio">Portfolio</Link>
                <Link id={isOnThis("Blog")} class="nav-link" to="/blog">Blog</Link>
            </Menu>
            <CurrentpageMobile href="/">{BlackState.pageTitle}</CurrentpageMobile>
            <div>
                <img id="header-logo" src={logo} alt="logo"/>
            </div>
        </Container>
    )
}
function show(e) {
    e.preventDefault();
    if (BlackState.isMobileMenuShown) {
        document.getElementById("black-mobile-menu").style.display = 'none';
        BlackState.isMobileMenuShown = false
        document.getElementsByTagName('body')[0].style.overflow = 'visible';
    }else {
        document.getElementById("black-mobile-menu").style.display = 'flex';
        BlackState.isMobileMenuShown = true
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
}

function isOnThis(identifier) {
    if (identifier === BlackState.pageTitle) {
        return "current-link"
    }else {
        return ""
    }
}
const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    min-height:58px;
    backdrop-filter: blur(35px);
    background: #0e0e10;
    box-shadow: 0px 4px 4px 0px #000000 25%;

    border-bottom: 1px solid #333;

    #header-logo {
        width: 40px;
        margin-right: 20px;
    }
`

const Menu = styled.div`
    display: initial;
    height: 100%;

    @media (max-width: 730px) {
        display: none;
    }

    .nav-link {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        padding-left: 16px;
        padding-right: 16px;
        letter-spacing: -.05em;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        height:100%;
    }

    #current-link {
        color: white;
    }
`

const HamMenu = styled.button`
    display: none;
    color: white;
    margin-right: 16px;
    margin-left: 16px;
    cursor: pointer;
    background: none;
    background-image: none;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    border: none;
    @media (max-width: 730px) {
        display: flex;
    }
`

const CurrentpageMobile = styled.a`
    display: none !important;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    padding-right: 16px;
    letter-spacing: -.05em;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height:100%;
    left: -10px;
    @media (max-width: 730px) {
        display: flex !important;
    }
`
/**
 * color: ${props => props.current ? "palevioletred" : "white"};
 **/
export default Header
