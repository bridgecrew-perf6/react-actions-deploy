import styled from 'styled-components'
import { WhiteBtn } from './Buttons'
import { ResponsiveTo } from '../hooks/useResponsive'

export const TfttSection = styled.section`
  background-color: #000;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${ResponsiveTo('Tablet')} {
    gap: 3rem;
  }
  ${ResponsiveTo()} {
    gap: 5rem;
    padding: 9rem 0 14rem;
  }
`

export const Title = styled.h2`
  font-family: 'Cooper Hewitt', sans-serif;
  font-size: 2.5rem;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  & > strong {
    color: #F10505;
  }
  ${ResponsiveTo('Tablet')} {
    font-size: 3rem;
  }
  ${ResponsiveTo()}{
    font-size: 4rem;
  }
  ${ResponsiveTo('Desktop22')}{
    font-size: 6rem;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  ${ResponsiveTo('Tablet')}{
    grid-row-start: 1;
  }
  ${ResponsiveTo()}{
    grid-column-end: span 3;
    &:nth-child(3) {
      grid-row-start: 2;
      grid-column-start: 3;
    }
  }
`

export const Link = styled.a`
  text-decoration: none;
  &:visited,
  &:active,
  &:hover,
  &:link,
  &:focus {
    color: white;
  }
  ${ResponsiveTo()}{
    grid-column-end: span 2;
  }
`

export const Button = styled(WhiteBtn)`
  font-family: 'Monument Extended', sans-serif;
  padding: 0.75rem 1rem;
  font-size: 0.89rem;
  line-height: 83.7%;
  ${ResponsiveTo()}{
    padding: 1rem 1.5rem;
  }
  ${ResponsiveTo('Desktop15')}{
    font-size: 1.25rem;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  ${ResponsiveTo('Tablet')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1.75rem;
  }
  ${ResponsiveTo()}{
    padding: 0;
    grid-template-columns: 10% 10% 1fr 10% 10%;
    max-width: 1440px;
    margin: 0 auto;
    gap: 3rem 1.75rem;
    ${Button}:nth-child(1) {
      align-self: flex-start;
    }
    ${Button}:nth-child(2) {
      align-self: flex-end;
    }
  }
  ${ResponsiveTo('Desktop22')}{
    gap: 5rem 2rem;
  }
`
