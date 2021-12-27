import React, { useState } from 'react'
import {
  Footer,
  Container,
  Title,
  Grid,
  Col,
  Section,
  SocialBar,
  SocialItem,
  Icon,
  SubMenu
} from '../styles/FooterStyles'

import { ReactComponent as FbIcon } from '../assets/icons/facebook.svg'
import { ReactComponent as IgIcon } from '../assets/icons/instagram.svg'
import { ReactComponent as DcIcon } from '../assets/icons/DISCORD.svg'
import { ReactComponent as TgIcon } from '../assets/icons/TELEGRAM.svg'
import { ReactComponent as TwIcon } from '../assets/icons/TWITTER.svg'
import { ReactComponent as RowIcon } from '../assets/icons/rowIcon.svg'

export default () => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const HandleOnClick = (e) => {
    e.preventDefault()
    setShowSubMenu(!showSubMenu)
  }
  return (
    <Footer>
      <Container>
        <Title>
          Contact Us
        </Title>
        <Grid>
          <Col>
            <h1>
              Operational Offices
            </h1>
            <p>

              UK, USA, Canada, Israel, Australia
            </p>
          </Col>

          <Col>
            <h1>
              The MovieLounge UK
            </h1>
            <p>

              London, Greater London, England, United Kingdom
            </p>
          </Col>
          <Col>
            <h1>
              Hours
            </h1>
            <SubMenu>
              <li>
                Open today 09:00 – 17:00
                <Icon onClick={HandleOnClick} showSubMenu={showSubMenu}>
                  <RowIcon />
                </Icon>

              </li>
              {showSubMenu && <>
                <li>Mon 09:00 – 17:00</li>
                <li> Tue 09:00 – 17:00</li>
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </>}
            </SubMenu>
          </Col>
        </Grid>
      </Container>
      <Section>
        <SocialBar>
          <SocialItem href='https://twitter.com/TheFilmCoin'> <TwIcon /></SocialItem>
          <SocialItem href='https://www.instagram.com/thefilmcoin/?hl=es-la'><IgIcon /></SocialItem>
          <SocialItem href='#'><DcIcon /></SocialItem>
          <SocialItem href='https://www.facebook.com/The-Film-Coin-111549944695856'><FbIcon /></SocialItem>
          <SocialItem href='#'><TgIcon /></SocialItem>
        </SocialBar>
      </Section>
    </Footer>
  )
}
