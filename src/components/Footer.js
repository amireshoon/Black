import React from 'react'
import styled from 'styled-components'
import icgithub from '../images/ic-github.svg'
import ictwitter from '../images/ic-twitter.svg'
import icdribble from '../images/ic-dribble.svg'
const Footer = () => {
    return (
        <BlackFooter>
        <Container>
            <div>
                Copyright © 2021 All rights reserved.
            </div>
            <div>
                <ul>
                    <li>
                        <a href="https://github.com/amireshoon">
                            <img src={icgithub} alt="Github profile"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Amirhwsin">
                            <img src={ictwitter} alt="twitter account" id="ic-twitter"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://dribbble.com/amireshoon">
                            <img src={icdribble} alt="dribble account" id="ic-dribble"></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="https://github.com/amireshoon/black">Souce code available</a> | <a href="https://github.com/amireshoon/black">Contribute</a>
            </div>
        </Container>
        </BlackFooter>
    )
}

const BlackFooter = styled.footer`
    z-index: 10;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-firection: row;
    align-items: center;
    text-align: center;
    color: #8a8f98;
    font-size: 12px;
    font-weight: 400;
    padding: 16px;

    ul img {
        padding: 5px;
        width: 33px;
        height: 34px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    ul li {
        display: inline-block;
    }

    #ic-twitter {
        width: 24.05px !important;
    }

    #ic-dribble {
        width: 24.05px !important;
    }

    @media (max-width: 670px) {
        display: block;
    }
`

export default Footer
