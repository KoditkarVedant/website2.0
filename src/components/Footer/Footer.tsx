import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    min-width: 10vh;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterWrapper>
            {"Made with 💖 by Vedant"}
        </FooterWrapper>
    )
}

export default Footer