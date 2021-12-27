import React from 'react'
import { Section, IconsContainer } from '../styles/HeroStyles'
import logo from '../assets/images/FCTextLogo.png'
import { ReactComponent as MobCoin1 } from '../assets/images/Coins1.svg'
import { ReactComponent as MobCoin2 } from '../assets/images/Coins2.svg'

export default () => {
  return (
    <Section>
      <IconsContainer>
        <div><MobCoin1 /></div>
        <div><MobCoin2 /></div>

      </IconsContainer>
      <img src={logo} alt='Logo FilmCoin' />

    </Section>

  )
}
