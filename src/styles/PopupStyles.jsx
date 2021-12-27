import styled from 'styled-components'
import { WhiteBtn } from './Buttons'
import { ResponsiveTo } from '../hooks/useResponsive'
import { ReactComponent as Close } from '../assets/icons/CloseIcon.svg'

export const PopupWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0,0.7);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  overflow:hidden;
`

export const Container = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 1rem 2rem 1.25rem;
  gap: 0.75rem;
  position: relative;
  max-width: 350px;
  box-shadow: 4px 4px 9px 4px rgba(0, 0, 0, 0.25);
  ${ResponsiveTo()}{
    gap: 1rem;
    max-width: 450px;
    padding: 3rem 1.5rem 2.25rem 1.5rem;
  }
  ${ResponsiveTo('Desktop22')}{
    max-width: 650px;
    gap: 1.5rem;
    padding: 3.5rem 2rem 3rem;
  }
`

export const CloseBtn = styled(Close)`
  width: 0.75rem;
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 10%;
  color: #009242;
  ${ResponsiveTo('Desktop22')}{
    width: 1.25rem;
    right: 5%;
  }
`

export const Title = styled.h2`
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 92%;
  text-align: center;
  text-transform: uppercase;
  & > strong {
    color: #009242;
  }
  ${ResponsiveTo('Tablet')} {
    font-size: 2.5rem;
  }
  ${ResponsiveTo('Desktop22')}{
    font-size: 4rem;
  }
`

export const Description = styled.p`
  text-align: center;
  font-size: 0.88rem;
  line-height: 109%;
  letter-spacing: -5%;
  ${ResponsiveTo()}{
    font-size: 1.25rem;
  }
  ${ResponsiveTo('Desktop22')}{
    font-size: 1.5rem;
  }
`

export const Button = styled(WhiteBtn)`
  padding: 0.3rem 0.75rem;  
  font-size: 0.9rem;
  align-self: center;
  transition: all 0.5s ease-in-out;
  border: 1px solid #000;
  color: #009242;
  border-color: #009242;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    background-color: #009242;
    color: #fff;
  }
  ${ResponsiveTo()}{
    font-size: 1.125rem;
    margin-top: 0.75rem;
    padding: 0.5rem 1rem;
  }
  ${ResponsiveTo('Desktop22')}{
    padding: 0.75rem 1.5rem;
    font-size: 1.5rem;
  }
`

export const SmallText = styled.span`
  font-size: 0.75rem;
  line-height: 1.2;
  align-self: center;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  ${ResponsiveTo()}{
    font-size: 1rem;
  }
`
