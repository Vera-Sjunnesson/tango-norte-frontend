import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavBarContainer = styled.div`
  width: 100%;  
  position: fixed;
  top: 59px;
  z-index: 1001;
  width: 100%;
  height: 46px;
  right: 0;
  z-index: 999;
`

export const NavBarWrapper = styled.div`
  width: 100%;
  z-index: 1001;
  width: 100%;
  height: 46px;
  position: fixed;
  right: 0;
  margin: auto;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavBarWrapper2 = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1001;
  background: #000000d6;
  height: 41px;
`

export const NavWrapper = styled.nav`
display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 170px;
    z-index: 999;
    text-align: center;
    border-bottom: solid 0.5px #222322c4;
    background: #ffffff;
    /* padding: 0 431px; */
    width: 100%;
    box-shadow: 7px 7px 19px 0px rgba(0,0,0,0.20);
`

export const LogInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  z-index: 999;
  text-align: center;
`

export const LogInContainer = styled.div`
  height: 40px;
  width: 106px;
  position: fixed;
  top: 0px;
  right: 0;
  z-index: 999;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoContainer = styled.div`
  height: 40px;
  width: 180px;
  position: fixed;
  top: 0px;
  left: 10px;
  z-index: 999;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavBar = () => {
  const navLinkStyle = {
    fontWeight: '700',
    color: '#222322c4',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  const linkStyle = {
    fontWeight: '700',
    color: '#222322c4',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '15px 10px',
    width: '85px',
    border: 'solid 0.5px #222322c4',
    background: 'white',
    position: 'fixed',
    top: '58px',
    right: '0px',
    zIndex: '1010'

  }

  const menuItems = [
    { id: 1, name: 'HEM', path: '/' },
    { id: 2, name: 'OM OSS', path: '/om' },
    { id: 3, name: 'BLI MEDLEM', path: '/om' }
  ];

  return (
    <NavBarContainer>
      <NavBarWrapper>
        <NavWrapper>
          {menuItems.map((item) => {
            return (
              <NavLink
                style={navLinkStyle}
                key={item.id}
                path={item.path}
                name={item.name}>
                {item.name}
              </NavLink>
            )
          })}
        </NavWrapper>
      </NavBarWrapper>
      <NavLink
        style={linkStyle}
        to="/om">
        LOGGA IN
      </NavLink>
    </NavBarContainer>
  )
}

export const NavBarDark = () => {
  const navLinkStyle = {
    fontWeight: '700',
    color: 'white',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  const linkStyle = {
    fontWeight: '800',
    color: 'white',
    textDecoration: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'center'
  }

  return (
    <NavBarWrapper2>
      <NavLink to="/" style={navLinkStyle}>HEM</NavLink>
      <NavLink to="/om" style={navLinkStyle}>OM OSS</NavLink>
      <a
        href="https://www.tangonorte.com/register.php"
        target="_blank"
        rel="noreferrer"
        style={navLinkStyle}>
          BLI MEDLEM
      </a>
      <a
        href="https://www.tangonorte.com/page.php?id=*"
        target="_blank"
        rel="noreferrer"
        style={navLinkStyle}>
          OM TANGO
      </a>
      <LogInContainer>
        <a
          href="https://www.tangonorte.com/page.php?id=main"
          target="_blank"
          aria-label="linkedin"
          rel="noreferrer"
          style={linkStyle}>
            LOGGA IN
        </a>
      </LogInContainer>
      <NavLink
        to="/">
        <LogoContainer>
          <img src={`${process.env.PUBLIC_URL}/assets/norte-logo-new-02.svg`} alt="logo" />
        </LogoContainer>
      </NavLink>
    </NavBarWrapper2>
  )
}