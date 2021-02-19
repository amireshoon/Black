import React from 'react'
import styled from 'styled-components'
import externalLink from '../images/ic-external-link.svg'

const Portfolio = () => {
    return (
        <Container>
            <Portfolios>
                <BlackPortfolio>
                    <img src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="Portfolio sample"/>
                    <h1>Post 1</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink} alt="external link icon"/></a>
                    </BlackPortfolio>
                <BlackPortfolio><h1>Post 2</h1></BlackPortfolio>
                <BlackPortfolio><h1>Post 3</h1></BlackPortfolio>
                <BlackPortfolio><h1>Post 4</h1></BlackPortfolio>
            </Portfolios>
            
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`

const Portfolios = styled.div`
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
`

const BlackPortfolio = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
    width: min-content;
    height: 221px;
    border-radius: 21px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
    display: flex;
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

    img {
        height: 221px;
        border-radius: 21px;
    }
`

export default Portfolio