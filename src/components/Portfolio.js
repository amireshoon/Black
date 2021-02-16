import React from 'react'
import styled from 'styled-components'
import externalLink from '../images/ic-external-link.svg'

const Portfolio = () => {
    return (
        <Container>
            <BlackPortfolio><h1>Post 1</h1></BlackPortfolio>
            <BlackPortfolio><h1>Post 2</h1></BlackPortfolio>
            <BlackPortfolio><h1>Post 3</h1></BlackPortfolio>
            <BlackPortfolio><h1>Post 4</h1></BlackPortfolio>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding: 80px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 780px) {
        grid-template-columns: auto;
    }
`

const BlackPortfolio = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    width: auto;
    height: 221px;
    border-radius: 21px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
    
    opacity: 0;
    animation: fadein 2s forwards;
    -moz-animation: fadein 2s forwards; /* Firefox */
    -webkit-animation: fadein 2s forwards; /* Safari and Chrome */
    -o-animation: fadein 2s forwards; /* Opera */
    animation-delay: 0.4s;

    #black-portfolio-image {
        width: auto;
        height: 100%;
        border-radius: 21px;
    }

    #black-post-link {
        font-weight: 400;
        font-size: 16px;
        margin-left: 14px;
        margin-right: 14px;
    }

    #black-post-link > img {
        width: 14px;
    }
`

export default Portfolio
