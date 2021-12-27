import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import { BlackBtn } from './Buttons'

export const TerrySection = styled.section`
  padding: 5rem 0;
  background-color: #24262D;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ResponsiveTo('Tablet')}{
    padding: 5rem 3.5rem;
    gap: 2rem;
  }
  ${ResponsiveTo()}{
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem 0;
    padding: 7rem 10%;
    justify-items: left;
    align-items: center;
  }
`

export const Pic = styled.img`
  width: 100%;
  height: auto;
  ${ResponsiveTo('640px')}{
    width: 85%;
  }
  ${ResponsiveTo()}{
    width: 100%;
    grid-row-end: span 2;
    justify-self: center;
    align-self: center;
  }
`

export const MLTitle = styled.h2`
  margin: 0;
  font-size: 2.75rem;
  line-height: 87.2%;
  padding: 0 1.5rem;
  margin-bottom: 0.75rem;
  text-align: center;
  ${ResponsiveTo('640px')}{
    margin-bottom: 0;
  }
  ${ResponsiveTo('Tablet')}{
    font-size: 3.5rem;
  }
  ${ResponsiveTo()}{
    padding: 0;
    font-size: 2.75rem;
    order: 1;
    text-align: left;
    align-self: flex-end;
  }
  ${ResponsiveTo('Desktop22')}{
    font-size: 3.5rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${ResponsiveTo('Tablet')}{
    margin-top: -3rem;
  }
  ${ResponsiveTo()}{
    grid-row-start: 2;
    grid-column-start: 2;
    gap: 1rem;
    margin: 0;
    padding: 0 0 20%;
    align-items: flex-start;
  }
`

export const TerryTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 109%;
  ${ResponsiveTo('Tablet')}{
    font-size: 2rem;
  }
  ${ResponsiveTo()}{
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.span`
  font-size: 1rem;
  line-height: 1.12;
  font-family: "Monument Grotesk mono", monospace;
  ${ResponsiveTo()}{
    font-size: 1.25rem;
  }
`

export const Link = styled.a`
  text-decoration: none;
  &:visited,
  &:active,
  &:hover,
  &:link,
  &:focus {
    color: black;
  }
`

export const Button = styled(BlackBtn)`
  font-family: 'Monument Grotesk', sans-serif;
  margin-top: 0.5rem;
  padding: 0.25rem 1.5rem 1.25rem;
  font-size: 1.125rem;
  line-height: 82%;
  ${ResponsiveTo('Tablet')}{
    align-self: start;
  }
  ${ResponsiveTo()}{
    margin-top: 1rem;
    font-size: 1.5rem;
    padding: 0.25rem 2.5rem 1.75rem;
  }
`
