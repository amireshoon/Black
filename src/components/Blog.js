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
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
                </BlackArticle>

                <BlackArticle for="">
                    <img id="black-post-image" src="https://cdn.dribbble.com/users/2291435/screenshots/15102950/media/eebe8d7fa0ee02c5df63b3e0baa2ddd3.png" alt="psot title"/>
                    <h1 id="black-post-title">There is more than you know</h1>
                    <p id="black-post-shortdesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <a id="black-post-link" href="#">Read more <img src={externalLink}/></a>
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
    float: left;
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
