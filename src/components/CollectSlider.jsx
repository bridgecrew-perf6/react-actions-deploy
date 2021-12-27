import React from 'react'
import { useNavigate } from 'react-router-dom'
import FCLogo from '../assets/icons/FCTextLogo.svg'
import {
  Section,
  Grid,
  TextBox,
  Button,
  ImgContainer,
  // Paginator,
  Container
} from '../styles/CollectSliderStyles'

export default () => {
  const navigate = useNavigate()
  return (
    <Section>

      <Container>
        <Grid>
          <TextBox>
            <h1>COLLECT FILMCOIN</h1>
            <p>Participate in FILMCOIN</p>
            <Button onClick={() => navigate('/filmcoin')}> <span> Learn More </span> </Button>
          </TextBox>
          <ImgContainer>
            <img src={FCLogo} alt='' />
          </ImgContainer>
        </Grid>
        {/* <Paginator>
          {
          [1, 2, 3].map((item, index) => {
            return (
              <li key={index}> </li>
            )
          })
        }
        </Paginator> */}
      </Container>
    </Section>

  )
}
