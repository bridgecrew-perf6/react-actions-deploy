import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, TextBox, MenuContainer, SubMenu, Grid, LMBtn, Icon, VideoContainer } from '../styles/BannerStyles'
import videoBanner from '../assets/videoBannerOurServices.mp4'
import { ReactComponent as RowIcon } from '../assets/icons/rowIcon.svg'
export default () => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const navigate = useNavigate()
  const HandleClick = (e) => {
    e.preventDefault()
    setShowSubMenu(!showSubMenu)
  }
  return (
    <Container>
      <VideoContainer>
        <video src={videoBanner} autoPlay loop muted />
      </VideoContainer>
      <Grid>
        <TextBox>
          <h1>
            Our Services
          </h1>

          <LMBtn onClick={() => navigate('/filmcoin')}>
            <span>
              Learn More
            </span>
          </LMBtn>

        </TextBox>
        <MenuContainer>
          <Icon showSubMenu={showSubMenu} onClick={HandleClick}>
            <RowIcon />
          </Icon>
          <SubMenu showSubMenu={showSubMenu}>
            <li> <Link to='/filmcoin'>FilmCoin</Link> </li>
            <li> <Link to='/tftt'> Become a Hollywood Star</Link> </li>
            <li> <Link to='#'> NFTs </Link> </li>
          </SubMenu>
        </MenuContainer>
      </Grid>

    </Container>
  )
}
