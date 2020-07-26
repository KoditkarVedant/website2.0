import React from 'react'
import twitter from './twitter.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import styled from 'styled-components'

const SocialLinksWrapper = styled.div`
    font-size: 20px;
    text-align: center;

    & > .description {
        margin-bottom: 16px;
    }

    & > .social-accounts {
        display: flex;
        justify-content: center;

        a {
            margin: 0 16px;

            img {
                height: 24px;
                width: 24px;
            }
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
    }
      
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        font-size: 28px;

        & > .social-accounts {
            display: flex;
            justify-content: center;
    
            a {
                margin: 0 16px;
    
                img {
                    height: 48px;
                    width: 48px;
                }
            }
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
    }
`

export default function SocialLinks() {
    return (
        <SocialLinksWrapper>
            <p className="description">{"Let's connect"}</p>
            <div className="social-accounts">
                <a href="https://github.com/KoditkarVedant" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" />
                </a>
                <a href="https://twitter.com/vedantkoditkar" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/vedantkoditkar" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
        </SocialLinksWrapper>
    )
}
