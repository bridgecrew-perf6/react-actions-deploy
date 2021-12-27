import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import Background from '../assets/home/AwardWinningBG.jpg'

export const AwardWinningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  background-color: #181818;
  color: #fff;
  padding-bottom: 3.5rem;
  ${ResponsiveTo('Tablet')}{
    gap: 3.5rem;
  }
  ${ResponsiveTo()}{
    gap: 5rem;
  }
`

export const Title = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  line-height: 83.7%;
  padding: 1rem 1rem 3rem;
  background-image: url(${Background});
  background-size: 250% auto;
  background-position: 58% 3%;
  text-align: center;
  ${ResponsiveTo('570px')}{
    font-size: 3rem;
    padding: 1rem 4rem 4rem;
  }
  ${ResponsiveTo('Tablet')}{
    font-size: 4.5rem;
    padding-bottom: 5rem;
  }
  ${ResponsiveTo()}{
    font-size: 6rem;
    padding: 2rem 15% 7rem;
    background-position: 57% 6%;
    background-size: 200% auto;
  }
  ${ResponsiveTo('Desktop15')}{
    padding: 2rem 20% 8rem;
  }
  ${ResponsiveTo('Desktop22')}{
    padding: 2.5rem 25% 8.5rem;
  }
`

export const AwardWinningFilms = styled.div`
  display: flex;
  flex-direction: column;
  ${ResponsiveTo('Tablet')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.25rem 1rem;
    justify-content: center;
  }
  ${ResponsiveTo()}{
    gap: 1rem 2rem;
  }
`
export const Film = styled.a`
  width: 100%;
  height: auto;
  ${ResponsiveTo()}{
    position: relative;
    cursor: pointer;
    &:hover{
      & > h3 {
        display: flex;
      }
    }
  }
`

export const FilmImage = styled.img`
  width: inherit;
  height: inherit;
`

export const FilmTitle = styled.h3`
  display: none;
  ${ResponsiveTo()}{
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    font-size: 2.5rem;
    line-height: 90%;
    padding: 0 2rem;
    color: transparent;
    transition: all 0.5s ease-in-out;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.74);
      text-decoration: underline;
      color: #fff;
    }
  }
`
