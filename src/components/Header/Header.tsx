import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    background-color: transparent;
    min-height: 10vh;
    color: #1f1f1f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    z-index: 1;
  
    & a {
        text-decoration: none;
        color: #f2f2f2;
    }

    & > .App-header-nav {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    
    & > .App-header-nav > li > a {
        padding: .4rem .6rem;
        font-size: 20px;
    }
    
    & > .App-header-name {
        font-weight: 500;
    }
`

const Header = () => {
    return (
        <HeaderWrapper>
            <ul className="App-header-nav">
                <li>
                    <Link to="/blogs">
                        {'Blogs'}
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {'About'}
                    </Link>
                </li>
            </ul>
        </HeaderWrapper>
    )
}

export default Header
