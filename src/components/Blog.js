import React from 'react'
import styled from 'styled-components'
import externalLink from '../images/ic-external-link.svg'

const Blog = () => {
    return (
        <Container>
            <BlackArticles>
                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2893989/screenshots/15104100/media/94ad9005a2be8afba34b91776b9c1aaf.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/3366206/screenshots/15104537/media/b258f56f17096efec4970e55c7928b3b.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/5349290/screenshots/15104011/media/ad3208244c1b1f79ccda3ffb27038ba9.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/625592/screenshots/15106517/media/ee99f71f1d045a99967d3ddaeb0c9aed.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/238864/screenshots/15100860/media/09fa3a617e9225290a3d105b8fc9448d.jpg" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/1991129/screenshots/15100943/media/6ebfb5f4b24d2c621caabc65efdf38e8.jpg" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2351/screenshots/15101616/media/90ceb56733b970557224ebbc902e0cec.jpg" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="/new-post">Read more <img src={externalLink}/></a>
                </BlackArticle>
            </BlackArticles>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
`

const BlackArticles = styled.div`
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 40px;
`

const BlackArticle = styled.article`

    background-color: rgba(255, 255, 255, 0.1);
    width: 282px;
    border-radius: 19px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
    padding-bottom: 20px;
    float: right; // i don't know why i had to change it maybe later i have to revert it to left
    margin-left: 17px;
    margin-bottom: 20px;

    #black-post-image {
        width: 282px;
        border-radius: 19px;
        margin-bottom: 20px;
    }

    #black-post-title {
        color: white;
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 8px;
        margin-left: 14px;
        margin-right: 14px;
    }

    #black-post-shortdesc {
        color: rgba(255, 255, 255, 0.9);
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 20px;
        margin-left: 14px;
        margin-right: 14px;
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

    @media (max-width: 770px) {
        margin-left: 0px;
        width: 100%;
        #black-post-image {
            width: 100%;
        }
    }
`

export default Blog
