import {
  AwardWinningContainer,
  Title,
  AwardWinningFilms,
  Film,
  FilmImage,
  FilmTitle
} from '../styles/AwardWinningStyles'
import Footsoldier from '../assets/home/Footsoldier.png'
import Plastic from '../assets/home/Plastic.png'
import Rolling from '../assets/home/Rolling.png'
import Santa from '../assets/home/Santa.png'
import London from '../assets/home/London.png'
import Lucky from '../assets/home/Lucky.png'

const AwardWinning = () => {
  return (
    <AwardWinningContainer>
      <Title>Award Winning Track Record</Title>
      <AwardWinningFilms>
        <Film
          href='https://www.gateway-films.com/films.php?film=rise-of-the-footsoldier'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FilmImage src={Footsoldier} alt='Rise of the footsoldier movie cover' />
          <FilmTitle>Rise of the footsoldier</FilmTitle>
        </Film>
        <Film
          href='https://www.gateway-films.com/films.php?film=plastic'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FilmImage src={Plastic} alt='Plastic movie cover' />
          <FilmTitle>Plastic</FilmTitle>
        </Film>
        <Film
          href='https://www.gateway-films.com/films.php?film=rolling'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FilmImage src={Rolling} alt="Rollin' with the nines movie cover" />
          <FilmTitle>Rollin' with the nines</FilmTitle>
        </Film>
        <Film
          href='https://www.gateway-films.com/films.php?film=saving-santa'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FilmImage src={Santa} alt='Saving Santa movie cover' />
          <FilmTitle>Saving Santa</FilmTitle>
        </Film>
        <Film
          href='http://www.gateway-films.com/films.php?film=once-upon-a-time'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FilmImage src={London} alt='Once upon a time in London movie cover' />
          <FilmTitle>
            Once upon a time in London
          </FilmTitle>
        </Film>
        <Film
          href='https://www.gateway-films.com/films.php?film=get-lucky'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FilmImage src={Lucky} alt='Get lucky movie cover' />
          <FilmTitle>Get lucky</FilmTitle>
        </Film>
      </AwardWinningFilms>
    </AwardWinningContainer>
  )
}

export default AwardWinning
