import React from 'react'
import styled from 'styled-components'
import {
    useParams
  } from "react-router-dom";
import ManSitting from '../images/img-man-sitting.png'
import BlackState from '../pageState'

const Post = () => {
    let { topicId } = useParams();
    if (BlackState.specialPost == 'about') {
        // Load about post
    }else {
        // Load orginal post
    }
    return (
        <Container>
            
            <Wrapper>
            <img src={ManSitting} alt="Man sitting" />
            <h1>
            {topicId} - I’m Amirhossein Meydani <br></br>
                A Backend and Android <br></br>
                Programmer and UI/UX Designer
            </h1>
            </Wrapper>
            <p>
                <h4 id='The-standard-Lorem-Ipsum-passage,-used-since-the-1500s'>The standard Lorem Ipsum passage, used since the 1500s</h4>

                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                <h4 id='Section_1.10.32-of-"de-Finibus-Bonorum-et-Malorum",-written-by-Cicero-in-45-BC'>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>

                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                <h4 id='1914-translation-by-H.-Rackham'>1914 translation by H. Rackham</h4>

                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                </p>
        </Container>
    )
}

const Container = styled.div`
    display: block;
    
    p {
        font-size: 21px;
        font-weight: 400;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 80px;
        text-align: justify;
        line-height: 32px;

        @media (max-width: 730px) {
            margin-top: 30px;
        }

        @media (max-width: 470px) {
            font-size: 16px;
        }
    }

    p > h4 {
        margin-top: 10px;
        margin-bottom: 10px;
        width: fit-content;
    }

    p > h4:hover {
        background-color: rgba(253, 184, 39, 0.3);
        -webkit-transition: background-color 400ms linear;
        -ms-transition: background-color 400ms linear;
        transition: background-color 400ms linear;
        border-radius: 3px;
        padding: 3px;
    }

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    h1 {
        font-size: 40px;
        font-weight: 800;
        width: 60%;
        margin-right: 40px;
        margin-left: 40px;

        @media (max-width: 730px) {
            margin: 0 auto;
            margin-top: 20px;
        }

        @media (max-width: 566px) {
            font-size: 32px;
        }

        @media (max-width: 400px) {
            font-size: 23px;
        }
    }

    img {
        margin-left: 40px;
        min-width: 20%;
        max-width: 25%;
        height: auto;
        @media (max-width: 730px) {
            margin: 0 auto;
        }
    }

    @media (max-width: 730px) {
        flex-direction: column;
        margin-top: 20px;
    }
`

export default Post
