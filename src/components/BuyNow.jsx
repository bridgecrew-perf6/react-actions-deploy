import React from 'react'
import { useNavigate } from 'react-router-dom'

// Styles
import {
  Section,
  Grid,
  Col,
  GreenButton,
  GreenButton2,
  GifContainer,
  GifText,
  Title

} from '../styles/BuyNowStyles'

// Images
// import textLogo from '../assets/images/FCTextLogo.png'

import gifText from '../assets/images/filmcoin-text2.gif'
// import imgCoins1 from '../assets/images/coinsAux1.svg'
export default () => {
  const navigate = useNavigate()
  return (
    <Section>
      <GifContainer>

        <GifText>
          <img src={gifText} alt='gof text' />
        </GifText>

      </GifContainer>
      <Grid>
        <Col>
          <Title>
            Benefits of <br /> buying FILM<span>COIN</span>
          </Title>

          <GreenButton onClick={() => navigate('/payment1')}> <span> BUY NOW </span>  </GreenButton>
        </Col>
        <Col>
          <ul>
            <li>Instant 20% uplift on today’s purchase</li>
            <li>Initial Dex Offering scheduled February 2022</li>
            <li>Limited token offering</li>
            <li>Internationally recognised senior executive team</li>
            <li>Blockchain powered technology</li>
            <li>Fast and secure transaction speeds</li>
            <li>Multiple exchange compatible (tokenomics)</li>
            <li>Access to a stabilised worldwide ecosystem</li>
            <li>Fantastic 2022/23 production slate</li>
          </ul>
          <GreenButton2 onClick={() => navigate('/payment1')}> <span> BUY NOW </span>  </GreenButton2>
        </Col>
      </Grid>

    </Section>
  )
}
