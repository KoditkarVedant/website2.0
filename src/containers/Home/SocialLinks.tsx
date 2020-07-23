import React from 'react'
import twitter from './twitter.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'
import styled from 'styled-components'

const SocialLinksWrapper = styled.div`
    font-size: 26px;
    text-align: center;

    & > .description {
        margin-bottom: 10px;
    }

    & > .social-accounts > a {
        margin-right: 20px;
    }
`

export default function SocialLinks() {
    return (
        <SocialLinksWrapper>
            <p className="description">{"Let's connect"}</p>
            <div className="social-accounts">
                <a href="https://github.com/KoditkarVedant" target="_blank" rel="noopener noreferrer">
                    <img src={github} height="50" width="50" alt="github" />
                </a>
                <a href="https://twitter.com/vedantkoditkar" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} height="50" width="50" alt="twitter" />
                </a>
                <a href="https://www.linkedin.com/in/vedantkoditkar" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} height="50" width="50" alt="linkedin" />
                </a>
            </div>
        </SocialLinksWrapper>
    )
}
