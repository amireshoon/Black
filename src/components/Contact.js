import React from 'react'
import styled from 'styled-components'
import manStanding from '../images/img-man-standing.png'
import smilingEmoji from '../images/smiling_emoji.png'
import twitter from '../images/ic-twitter.svg'
import github from '../images/ic-github.svg'
import dribbble from '../images/ic-dribble.svg'
import telegram from '../images/ic-telegram.svg'
import mailic from '../images/ic-mail.svg'
const Contact = () => {
    return (
        <Container>
            <img id="left-image" src={manStanding} alt="Man standing"/>
            <Content>
                <h1>You can reach me any time <img src={smilingEmoji} alt="Smiling emoji" /></h1>
                <p>
                I am Amirhossein Meydani and you can reach me for any Question, Project, or anything you know I could help in.
                <br></br>Also, you can follow me on Social Media.
                
                <BlackContactLink>
                    <Icon src={twitter} /> Twitter: <a href="https://twitter.com/amirhwsin">amirhwsin</a>
                </BlackContactLink>

                <BlackContactLink>
                    <Icon src={github} /> Github: <a href="https://github.com/amireshoon">amireshoon</a>
                </BlackContactLink>

                <BlackContactLink>
                    <Icon src={dribbble} /> Dribbble: <a href="https://dribbble.com/amireshoon">amiershoon</a>
                </BlackContactLink>

                <BlackContactLink>
                    <Icon src={telegram} /> Telegram: <a href="https://t.me/GeekDreamer">GeekDreamer</a>
                </BlackContactLink>

                <BlackContactLink>
                    <Icon src={mailic} /> Email: <a href="mailto:amirhwsin@outlook.com">amirhwsin@outlook.com</a>
                </BlackContactLink>
                </p>

            </Content>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    // min-height: 100vh;
    justify-content: center;
    align-items: center;
    #left-image {
        height: 757px;
        opacity: 0;
        animation: fadein 2s forwards;
        -moz-animation: fadein 2s forwards; /* Firefox */
        -webkit-animation: fadein 2s forwards; /* Safari and Chrome */
        -o-animation: fadein 2s forwards; /* Opera */
        animation-delay: 0.5s;
        @media (max-width: 800px) {
            height: 557px;
        }

        @media (max-width: 640px) {
            display: none;
        }
    }
`
const Content = styled.div`

    width: 60%;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    animation: fadein 2s forwards;
    -moz-animation: fadein 2s forwards; /* Firefox */
    -webkit-animation: fadein 2s forwards; /* Safari and Chrome */
    -o-animation: fadein 2s forwards; /* Opera */
    animation-delay: 0.4s;
    @media (max-width: 640px) {
        margin-left: 0px;
        margin-top: 40px;
    }

    h1 {
        font-size: 88px;
        font-weight: 800;
        margin-bottom: 20px;

        @media (max-width: 950px) {
            font-size: 68px;
        }

        @media (max-width: 700px) {
            font-size: 48px;
        }

        @media (max-width: 540px) {
            font-size: 28px;
        }
    }

    p {
        width: 80%;
        font-size: 20px;
        font-weight: 400;
    }

    h1 > img {
        width: 78px;

        @media (max-width: 950px) {
            width: 68px;
        }

        @media (max-width: 700px) {
            width: 48px;
        }

        @media (max-width: 540px) {
            width: 30px;
        }
    }

`

const BlackContactLink = styled.p`
    margin-top: 33px;
    opacity: 0;
    animation: fadein 2s forwards;
    -moz-animation: fadein 2s forwards; /* Firefox */
    -webkit-animation: fadein 2s forwards; /* Safari and Chrome */
    -o-animation: fadein 2s forwards; /* Opera */
    animation-delay: 0.8s;
`

const Icon = styled.img`
    width: 20px;
    
`

export default Contact
