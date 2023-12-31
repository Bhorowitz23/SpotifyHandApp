import React, {useEffect, useState} from 'react'
import{FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
//import File from '../../SpotifyHandDetector.zip';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem,  
  NavLinks,
  NavBtn,
  NavBtnLink,
  A
} from './NavbarElements';

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Spotify Hand Detector</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="setup"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Setup</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="instructions"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Instructions</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="about"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >About</NavLinks>
                  </NavItem>
                  
                </NavMenu>
                <A /*href={File}*/ download='SpotifyHandDetector'><NavBtn type = 'submit' >Download</NavBtn></A>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
