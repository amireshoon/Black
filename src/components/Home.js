import React from 'react'
import styled from 'styled-components'
import personwithlaptop from '../images/img-p-laptop.svg'
import handemoji from '../images/hand_wave.png'
import floatingHand from '../images/img-hand.svg'
import nerdFace from '../images/nerd-face.png'

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <img id="i-p-l" src={personwithlaptop} alt="man with laptop"/>
                <h1>
                    Hello there <img id="hand-wave" src={handemoji} alt="hand waving emoji"/><br></br>
                    <span>I </span><span>am </span>Amirhossein
                </h1>
                
                <p id="short-about">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <ButtonHolders>
                    <PrimaryButton id="about-me-btn" type="button">About me</PrimaryButton>
                    <SecondaryButton id="portfolios-btn" type="button"><img id="nerd-face" src={nerdFace} alt="nerd face emoji"/> Let’s see portfolios</SecondaryButton>
                </ButtonHolders>
                <img id="i-h" src={floatingHand} alt="floating hand"/>
            </Wrapper>
        </Container>
    )
}

const PrimaryButton = styled.button`
    background-color: #FDB827;
    height: 49px;
    border: none;
    border-radius: 8px;
    padding-left: 19px;
    padding-right: 19px;
    color: black;
    font-size: 16px;
    font-weight: 700;
    transition-duration: 0.4s;
    cursor: pointer;
`
const SecondaryButton = styled.button`
    background-color: rgba(255,255,255,0.1);
    height: 49px;
    border: none;
    border-radius: 8px;
    padding-left: 19px;
    padding-right: 19px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    transition-duration: 0.4s;
    cursor: pointer;
    text-align: center;
    align-items: center;
`

const ButtonHolders = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 10px 0;
    justify-content: center;
    margin-top: 31px;

    #nerd-face {
        width: 18px;
        height: 18px;
        position: relative;
        top: 3px;
    }

    #about-me-btn:hover {
        background-color: rgba(253, 184, 39, 0.6);
    }

    #portfolios-btn:hover {
        background-color: rgba(255,255,255,0.06);
    }
`

const Container = styled.div`
height:100%;
width:100%;
display: flex;
justify-content: center;
align-items: center;

#i-p-l {
    position: absolute;
    width:607px;
    height:607px;
    top: 45px;
    left:20px;
    z-index: 10;
    @media (max-width: 793px) {
        width:74%;
        height: 74%;
    }
    @media (max-width: 500px) {
        top: -36px;
        left: -24px;
        position: static;
    }
}

#i-h {
    position: absolute;
    bottom: 0;
    right: 0;
    width:462px;
    height:462px;
    z-index: 1;
    @media (max-width: 1000px) {
        width:362px;
        height:362px;
    }
    @media (max-width: 793px) {
        width:262px;
        height:262px;
    }
    @media (max-width: 400px) {
        display: none;
    }
}

h1 {
    width: 70%;
    color: white;
    font-weight: 900;
    font-size: 98px;
    text-align: center;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    @media (max-width: 793px) {
        font-size: 42px;
        width: 90%
    }
}

#hand-wave {
    @media (max-width: 500px) {
        width: 40px;
    }
}

span {
    @media (max-width: 1600px) {
        position: relative;
        z-index: 20;
    }
}

#short-about {
    width: 50%;
    color: white;
    text-align: center;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    font-size: 18px;
    font-weight:400;
    margin-top: 15px;
}

#about-me-btn {
    margin-right: 11px;
}
`

const Wrapper = styled.div`

`

export default Home
