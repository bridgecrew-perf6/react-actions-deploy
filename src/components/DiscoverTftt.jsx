import {
  Logo,
  Section,
  Subtitle,
  Title
} from '../styles/DiscoverTfttStyles'
import IJBImg from '../assets/tftt/IJBIMAG.png'

export default () => {
  return (
    <Section>
      <Title>DISCOVER OUR PEOPLE</Title>
      <Subtitle>FIND YOUR PLACE</Subtitle>
      <Logo src={IJBImg} alt='Im just bait logo' />
    </Section>
  )
}
