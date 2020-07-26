import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const HomeWrapper = styled.div`
    opacity: 0.9;
    min-height: 80vh;

    display: flex;
    flex-direction: column;

    & > .greet {
        font-style: italic;
        font-size: 24px;
        text-align: center;

        & > .author {
            display: block;
            font-size: 28px;
            text-shadow: 2px 2px #ff624d;
        }

        & > .pronounce {
            font-size: 28px;
        }
    }

    & > .intro {
        font-size: 16px;
        font-style: italic;
        text-align: center;

        & > p {
            margin-bottom: 10px;
        }
    }
    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        & > .greet {
            font-size: 24px;
    
            & > .author {
                font-size: 32px;
                text-shadow: 2px 2px #ff624d;
            }
        }
    
        & > .intro {
            font-size: 24px;
        }
    }
      
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {

        & > .greet {
            font-size: 32px;

            & > .author {
                font-size: 64px;
                text-shadow: 3px 3px #ff624d;
            }
        }

        & > .intro {
            font-size: 24px;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        & > .greet {
            font-size: 58px;

            & > .author {
                font-size: 78px;
                text-shadow: 5px 5px #ff624d;
            }
        }

        & > .intro {
            font-size: 30px;

            & > p {
                margin-bottom: 10px;
            }
        }
    }
`

const Home = () => {
    return (
        <HomeWrapper>
            <h1 className="greet">
                {"Hi there 👋, I'm "}
                <span className="author">
                    {"VEDANT KODITKAR"}
                </span>
            </h1>
            <div className="intro">
                <p>{"I'm a full stack .Net developer from Pune IN."}</p>
                <p>
                    {"I write blogs regarding the things that I've learned while working at my job. You can access them "}
                    <Link to={"/blogs"}>{"here"}</Link>
                    {"."}
                </p>
                <p>{"You can ask me about .Net Core, DevOps, C#, Docker, ReactJS and Cricket (Sport)."}</p>
                <p>{"⚡ Fun Fact: I can code"}</p>
            </div>
            <SocialLinks />
        </HomeWrapper>
    )
}

export default Home