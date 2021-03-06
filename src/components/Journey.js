import React from 'react'
import styled from 'styled-components'

const Journey = () => {
    return (
        <Container>
            <h1>Work in progress...</h1>
        </Container>
    )
}

const Container = styled.div`
    
    height: 82vh;
    h1 {
        margin: 0 auto;
        text-align: center;
        top: 50%;
        position: relative;
        font-size: 54px;
        animation-name: waitingAnimation;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    
`


export default Journey
