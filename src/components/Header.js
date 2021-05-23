import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" /> 
            <Navmenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span> HOME </span>
                </a>
            </Navmenu>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 80px;

`

const Navmenu = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
    }

`