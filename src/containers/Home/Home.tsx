import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const HomeWrapper = styled.div`
    opacity: 0.9;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .greet {
        font-size: 20px;
        font-style: italic;
        text-align: center;

        & > .author {
            color: #f2f2f2;
            text-shadow: 2px 2px #ff624d;
        }

        & > .pronounce {
            font-size: 28px;
        }
    }

    & > .intro {
        font-size: 30px;
        font-style: italic;
        text-align: center;

        & > p {
            margin-bottom: 10px;
        }
    }

    @media only screen and (min-width: 600px) {
        & > .greet {
            font-size: 58px;
        }
    }

    @media only screen and (min-width: 768px) {
        & > .greet {
            font-size: 78px;

            & > .author {
                color: #f2f2f2;
                text-shadow: 5px 5px #ff624d;
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
                {/* <span className="pronounce">{" [😄 Pronouns: vai-daant]"}</span> */}
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
            <br />
            <br />
            <SocialLinks />
        </HomeWrapper>
    )
}

export default Home