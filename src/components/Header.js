import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <div>
            <HamMenu>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" class="mobile-menu_icon__1FO0U"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg></HamMenu>

            </div>
            <Menu>

                <MenuItem href="/" current>Home</MenuItem>
                <MenuItem href="/about">About</MenuItem>
                <MenuItem href="/contact">Contact</MenuItem>
                <MenuItem href="/journey">Journey</MenuItem>
                <MenuItem href="/portfolio">Portfolio</MenuItem>

            </Menu>
            <div>
            </div>
        </Container>
    )
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
`

const Menu = styled.div`
display: initial;
height: 100%;

@media (max-width: 730px) {
    display: none;
}

`

const MenuItem = styled.a`

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

/**
 * color: ${props => props.current ? "palevioletred" : "white"};
 **/
export default Header
