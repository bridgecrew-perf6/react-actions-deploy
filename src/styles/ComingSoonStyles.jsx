import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import bgImg from '../assets/tftt/bgComingSoon.png'
import { BlackBtn } from './Buttons'

export const Section = styled.section`
  width:100%; 
  height: auto;
  padding: 6rem 0 5rem;
  background:#24262D;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: 40% center;
  ${ResponsiveTo('Tablet')} {
    background-position: 45% 55%;
    padding: 8rem 0 5rem;
  }
  ${ResponsiveTo()}{
    padding: 10rem 0;
  }
  ${ResponsiveTo('1900px')}{
    background-size: 125% auto;
  }
`

export const Container = styled.div`  
  width: 100%;
  display:flex;
  align-items: center;
  ${ResponsiveTo()}{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const TexBox = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  color: white;
  padding: 0 40px;
  text-align: center;
  ${ResponsiveTo()}{
    grid-column: 2;
    gap: 3.5rem;
    width: 530px;
    padding: 0 0;
    text-align: left;
  }
`
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: -0.05em;
  text-shadow: 0px 0px 10px rgba(0,0,0,0.5);
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
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 500px;
  span{
    font-weight:bold;
  }
  ${ResponsiveTo('Tablet')} {
    font-size: 1.25rem;
  }
  ${ResponsiveTo()}{
    font-size: 24px;
    line-height: 113%;
    max-width: 400px;
  }
  ${ResponsiveTo('Desktop22')}{
    align-self: flex-start;
    max-width: 600px;
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

export const ReadMoreBtn = styled(BlackBtn)`
  font-family: 'Monument Extended', sans-serif;
  padding: 0.5rem 1rem;
  ${ResponsiveTo()} {
    font-size: 1.5rem;
    padding: 1.25rem 1.75rem;
  }
`
