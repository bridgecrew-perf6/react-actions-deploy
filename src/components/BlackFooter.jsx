import React from 'react'
import { BlackCol, BlackFooter, Grid, SocialBar, SocialItem } from '../styles/FooterStyles'
import { ReactComponent as FbIcon } from '../assets/icons/blackFacebook.svg'
import { ReactComponent as IgIcon } from '../assets/icons/blackInstagram.svg'
import { ReactComponent as DcIcon } from '../assets/icons/blackDISCORD.svg'
import { ReactComponent as TkTkIcon } from '../assets/icons/whiteTikTok.svg'
import { ReactComponent as TwIcon } from '../assets/icons/blackTWITTER.svg'

export default () => {
  return (
    <BlackFooter>
      <Grid>
        <BlackCol>
          <SocialBar>
            <SocialItem href='https://twitter.com/TheFilmCoin'> <TwIcon /></SocialItem>
            <SocialItem href='https://www.instagram.com/thefilmcoin/?hl=es-la'><IgIcon /></SocialItem>
            <SocialItem href='#'><DcIcon /></SocialItem>
            <SocialItem href='https://www.facebook.com/The-Film-Coin-111549944695856'><FbIcon /></SocialItem>
            <SocialItem href='https://www.tiktok.com/@thefilmcoin?lang=es'><TkTkIcon /></SocialItem>
          </SocialBar>
        </BlackCol>
      </Grid>
      <Grid>
        <BlackCol>
          Copyright © 2021 FilmCoin - All Rights Reserved
        </BlackCol>
        <BlackCol>

          Powered by DarkHorse Film Studios
        </BlackCol>
        <BlackCol>
          PRIVACY POLICY
        </BlackCol>
      </Grid>
    </BlackFooter>
  )
}
