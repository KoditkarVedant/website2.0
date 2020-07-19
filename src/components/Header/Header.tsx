import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="App-header">
            <h1 className="App-header-name">
                <Link to="/">{'VEDANT'}</Link>
            </h1>
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
        </header>
    )
}

export default Header
