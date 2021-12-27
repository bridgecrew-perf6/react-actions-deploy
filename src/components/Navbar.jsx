import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Nav,
  MenuIcon,
  SearchIcon,
  Menu,
  Head,
  Text,
  Logo,
  CloseBtn,
  CloseIcon
} from '../styles/NavbarStyles'

import menuIcon from '../assets/icons/menuIcon.svg'
// import searchIcon from '../assets/icons/searchIcon.svg'
import TextLogo from '../assets/icons/FCTextLogo.svg'

export default (props) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleOnClick = () => {
    setShowMenu(!showMenu)
  }
  const handleOnClickClose = () => {
    setShowMenu(false)
  }
  const handleOnClikMenu = () => {
    props.changeLogo(false)
  }

  const handleOnMouseLeave = () => window.innerWidth >= 768 && handleOnClick()

  return (
    <Nav popupIsOpen={props.popupIsOpen}>
      <Head>
        <MenuIcon>
          {!showMenu && <img onClick={handleOnClick} src={menuIcon} alt='Menu Icon' />}
          <Menu showMenu={showMenu} onMouseLeave={handleOnMouseLeave}>
            <li> <Link onClick={handleOnClikMenu} to='/'>HOME</Link> </li>
            <li> <Link onClick={handleOnClikMenu} to='/filmcoin'>ABOUT FILMCOIN</Link> </li>
            <li> <Link onClick={handleOnClikMenu} to='/tftt'>Movie Productions</Link> </li>
            <li> <Link onClick={handleOnClikMenu} to='/contact'>CONTACT</Link> </li>
            <CloseBtn onClick={handleOnClickClose}>
              <CloseIcon />
            </CloseBtn>
          </Menu>
        </MenuIcon>
        {props.showLogo
          ? <Logo><img src={TextLogo} alt='Logo' /></Logo>
          : <Text>FILMCOIN</Text>}
        <SearchIcon>
          {/* <img src={searchIcon} alt='Search Icon' />
          <input type='text' placeholder='Search' /> */}
        </SearchIcon>
      </Head>
    </Nav>
  )
}
