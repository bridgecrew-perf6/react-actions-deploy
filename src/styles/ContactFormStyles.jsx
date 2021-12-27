import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import BackgroundDesktop from '../assets/contact/Film.png'
import BackgroundMobile from '../assets/contact/CameraMobile.png'
import { GreenBtn } from './Buttons'

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 3rem;
  background-image: url(${BackgroundMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${ResponsiveTo('Tablet')} {
    padding: 6rem 0 4rem;
  }
  ${ResponsiveTo()} {
    width: 100%;
    padding: 8rem 0 6rem;
    background-image: url(${BackgroundDesktop});
  }
  ${ResponsiveTo('Desktop15')} {
    padding: 10rem 0 8rem;
  }
  ${ResponsiveTo('Desktop22')} {
    padding: 14rem 0 10rem;
  }
`

export const Container = styled.div`
  width: 100%;
  ${ResponsiveTo('Tablet')} {
    max-width: 900px;
    border-radius: 6px;
  }
`

export const Form = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #000000cc;

  ${ResponsiveTo('Tablet')} {
    padding: 2rem 3rem;
    border-radius: 6px;
  }
  ${ResponsiveTo('Desktop15')} {
    padding: 3rem;
  }
  ${ResponsiveTo('Desktop22')} {
    padding: 3rem 5rem;
  }
`

export const Title = styled.h1`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  ${ResponsiveTo('640px')} {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  ${ResponsiveTo('640px')} {
    font-size: 1.125rem;
  }
`

export const Hr = styled.hr`
  width: 100%;
  margin: 1rem 0 0.75rem;
  ${ResponsiveTo('640px')} {
    margin: 1.75rem 0 1.25rem;
  }
`

export const Label = styled.label`
  font-size: 1.025rem;
  color: #A9A9A9;
  line-height: 1.75;
  ${props => props.required && css`
    &::after {
      content: '*';
      font-size: 110%;
      color: #F10505;
    }
  `}
  ${ResponsiveTo('640px')} {
    font-size: 1.125rem;
  }
`

const textBox = css`
  border: 1px solid white;
  background-color: transparent;
  border-radius: 6px;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  margin: 0.75rem 0;
  &:focus {
    outline: none;
    border-color: #009242;
    background-color: #0092424c;
  }
  &::placeholder {
    color: #ffffffcc;
  }
  ${ResponsiveTo('640px')} {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
  }
`

export const Input = styled.input`
  ${textBox}
`

export const TextArea = styled.textarea`
  height: 10rem;
  resize: none;
  margin-bottom: 0;
  ${textBox}
  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #c4c4c4;
  }
`

export const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

export const Checkbox = styled.div`
  cursor: pointer;
  margin-right: 0.75rem;
  width: 1rem;
  height: 1rem;
  background-color: #FFFFFF;
  border-radius: 50%;
  ${props => props.checked && css`
    background-color: #009242;
    border: 4px solid white;
  `}
  ${ResponsiveTo('640px')} {
    margin-right: 1rem;
    margin-top: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Button = styled(GreenBtn)`
  align-self: flex-end;
  border-radius: 2.5rem;
  margin-top: 1.25rem;
  background: rgba(0, 146, 66, 0.3);
  border: 1px solid #009242; 
  font-family: 'Space Mono', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  padding: 0.75rem 1.5rem;
  ${ResponsiveTo('640px')} {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
  }
`
