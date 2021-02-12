import React from 'react'
import styled from 'styled-components'
import manStanding from '../images/img-man-standing.svg'
import smilingEmoji from '../images/smiling_emoji.png'

const Contact = () => {
    return (
        <Container>
            <img id="left-image" src={manStanding} alt="Man standing picture"/>
            <Content>
                <h1>You can reach me any time <img src={smilingEmoji} alt="Smiling emoji" /></h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                
                <BlackContactLink>
                    Twitter: <a href="/twitter">amirhwsin</a>
                </BlackContactLink>

                <BlackContactLink>
                    Github: <a href="/twitter">amireshoon</a>
                </BlackContactLink>

                <BlackContactLink>
                    Dribble: <a href="/twitter">amiershoon</a>
                </BlackContactLink>

                <BlackContactLink>
                    Telegram: <a href="/twitter">GeekDreamer</a>
                </BlackContactLink>

                <BlackContactLink>
                    Email: <a href="mailto:amirhwsin@outlook.com">amirhwsin@outlook.com</a>
                </BlackContactLink>
                </p>

            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    #left-image {
        height: 757px;
    }
`
const Content = styled.div`

    width: 60%;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
        font-size: 88px;
        font-weight: 800;
        margin-bottom: 20px;
    }

    p {
        width: 80%;
        font-size: 20px;
        font-weight: 400;
    }

    h1 > img {
        width: 78px;
    }

`

const BlackContactLink = styled.p`
    margin-top: 33px;
`

export default Contact
