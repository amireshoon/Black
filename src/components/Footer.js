import React from 'react'
import styled from 'styled-components'
import icgithub from '../images/ic-github.svg'
import ictwitter from '../images/ic-twitter.svg'
import icdribble from '../images/ic-dribble.svg'
const Footer = () => {
    return (
        <footer>
        <Container>
            <div>
                Copyright © 2021 All rights reserved.
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">
                            <img src={icgithub}></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={ictwitter} id="ic-twitter"></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={icdribble} id="ic-dribble"></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="#">Souce code available</a> | <a href="#">Contribute</a>
            </div>
        </Container>
        </footer>
    )
}

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
`

export default Footer
