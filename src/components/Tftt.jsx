import {
  TfttSection,
  Title,
  Container,
  Image,
  Button,
  Link
} from '../styles/TfttStyles'
import ExperiencePlaceholder from '../assets/tftt/TfttExperiencePlaceholder.png'
import WelcomePlaceholder from '../assets/tftt/TfttWelcomePlaceholder.png'

const Tftt = () => {
  return (
    <TfttSection>
      <Title>Tales From the <strong>TRAP</strong></Title>
      <Container>
        <Image src={ExperiencePlaceholder} alt='Video placeholder' />
        <Link
          href='https://talesfromthetrap.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>Be in the Film</Button>
        </Link>
        <Image src={WelcomePlaceholder} alt='Video placeholder' />
        <Link
          href='https://talesfromthetrap.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>Film Synopsis</Button>
        </Link>
      </Container>
    </TfttSection>
  )
}

export default Tftt
