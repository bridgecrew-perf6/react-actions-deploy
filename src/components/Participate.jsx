import React from 'react'

import {
  Section,
  Container,
  Logo,
  Title,
  Text,
  InputContainer,
  SignButton
} from '../styles/ParticipateStyles'

import imgLogo from '../assets/icons/clapperboardLogo.svg'
export default () => {
  return (
    <Section>
      <Container>
        <Logo>
          <img src={imgLogo} alt='' />
        </Logo>
        <Title>
          Participate in FILMCOIN
        </Title>
        <Text>
          The Motion Picture Digital Currency Of Choice
        </Text>

        <InputContainer>
          <input type='text' />
          <SignButton>Sign Up</SignButton>
        </InputContainer>
      </Container>
    </Section>

  )
}
