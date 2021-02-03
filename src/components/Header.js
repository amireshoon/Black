import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <h1>Header</h1>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    min-height:58px;
    backdrop-filter: blur(35px);
    background: linear-gradient(150deg, rgba(255, 255, 255, 0.4) -50%, rgba(255, 255, 255, 0.04) 100%);

`

export default Header
