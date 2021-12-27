import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section, BtnBox, Button, Title } from '../styles/OurServicesStyles'

export default () => {
  const navigate = useNavigate()

  return (
    <Section>
      <Title />
      <BtnBox>
        <Button onClick={() => navigate('/filmcoin')}> <span>FilmCoin</span> </Button>
        <Button onClick={() => navigate('/tftt')}> <span>Become a Hollywood Star</span> </Button>
        <Button onClick={() => navigate('#')}> <span>NFTs</span> </Button>
      </BtnBox>
    </Section>
  )
}
