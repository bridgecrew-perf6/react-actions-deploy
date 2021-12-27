import TerryPic from '../assets/our-services/TerryStone.png'
import {
  TerrySection,
  Pic,
  Description,
  TerryTitle,
  Subtitle,
  Link,
  Button,
  MLTitle
} from '../styles/TerryStyles'

export const Terry = () => {
  return (
    <TerrySection>
      <MLTitle>MovieLounge Productions</MLTitle>
      <Pic src={TerryPic} alt='Terry Stone at the Rise of the footsoldier premiere' />
      <Description>
        <TerryTitle>Terry Stone</TerryTitle>
        <Subtitle> SVP Film &amp; Television</Subtitle>
        <Link
          href='https://talesfromthetrap.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>Read More</Button>
        </Link>
      </Description>
    </TerrySection>
  )
}

export default Terry
