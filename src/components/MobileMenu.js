import styled from "styled-components";

const MobileMenu = () => {
    return (
        <Container id="black-mobile-menu">
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/journey">Journey</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/blog">Blog</a>
            </nav>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    background-color: #000;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 100;
    top: 59px;
    left: 0;
    right: 0;
    bottom: 0;

    nav {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    nav > a {
        font-size: 32px;
        letter-spacing: -.05em;
        font-weight: 800;
        color: white;
        margin-bottom: 16px;
        line-height: 1.5;
        width: fit-content;
    }
`


export default MobileMenu