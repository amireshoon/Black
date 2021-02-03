import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <div></div>
            <Menu>

                <MenuItem href="#" current>Home</MenuItem>
                <MenuItem href="#">About</MenuItem>
                <MenuItem href="#">Contact</MenuItem>
                <MenuItem href="#">Journey</MenuItem>
                <MenuItem href="#">Portfolio</MenuItem>

            </Menu>
            <div></div>
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
/**
 * color: ${props => props.current ? "palevioletred" : "white"};
 **/
export default Header
