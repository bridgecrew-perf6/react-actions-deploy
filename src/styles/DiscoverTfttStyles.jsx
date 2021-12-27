import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import BgMobile from '../assets/tftt/discoverMobile.png'
import BgDesktop from '../assets/tftt/discoverourpeople.png'

export const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  background-image: url(${BgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-decoration: none;
  padding: 13rem 1rem 4rem;
  ${ResponsiveTo('420px')} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  ${ResponsiveTo('Tablet')} {
    padding: 9rem 0 5rem;
    gap: 4rem;
  }
  ${ResponsiveTo()} {
    background-image: url(${BgDesktop});
  }
`

export const Title = styled.h2`
  color: white;
  font-family: 'Cooper Hewitt', sans-serif;
  font-size: 38px;
  line-height: 44px;
  text-decoration: underline;
  max-width: 270px;
  text-align: center;
  @media (min-width: 768px) {
    line-height: 70px;
    font-size: 60px;
    max-width: initial;
  }
  @media (min-width: 1024px) {
    font-size: 90px;
    line-height: 105%;
  }
`

export const Subtitle = styled.h3`
  color: white;
  font-family: 'Steinbeck Regular', sans-serif;
  font-size: 1.125rem;
  letter-spacing: 0.3rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
  text-align: center;
  ${ResponsiveTo('Tablet')} {
    font-size: 32px;
    line-height: 36px;
  }
`

export const Logo = styled.img`
  width: 177px;
  height: 62px;
  margin: 0 auto;
`
