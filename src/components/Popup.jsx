import { useNavigate } from 'react-router-dom'
import {
  Button,
  CloseBtn,
  Container,
  Description,
  PopupWrapper,
  SmallText,
  Title
} from '../styles/PopupStyles'

export const Popup = (props) => {
  const navigate = useNavigate()
  return (
    <PopupWrapper
      isOpen={props.isOpen}
      id='popup'
    >
      <Container>
        <CloseBtn
          aria-label='Close popup'
          onClick={props.onClose}
        />
        <Title>Welcome to the FILM<strong>COIN</strong></Title>
        <Description>
          The Motion Picture Digital Currency Of Choice
        </Description>
        <Button onClick={() => navigate('/payment1')}>Buy Now</Button>
        <SmallText>
          20% discount public pre-sale
          <br />
          Minting on 28th February 2022
        </SmallText>
      </Container>
    </PopupWrapper>
  )
}

export default Popup
