import styled from 'styled-components'
import bgImg from '../assets/images/bgParticipate.png'
import { ResponsiveTo } from '../hooks/useResponsive'
import { TransparentButton } from './Buttons'
export const Section = styled.section`
  width: 100%;
  height:auto;
  background-image: url(${bgImg});
  background-repeat:no-repeat;
  background-size: cover;
  background-position-x:center;
  padding: 72px 0;
  ${ResponsiveTo()}{
    height: 604px;
  }
`
export const Container = styled.div`
  display:flex; 
  flex-direction:column;
  margin:0 26px;
  color:white;
  ${ResponsiveTo()}{
  margin:0 271px;
  }
  `

export const Logo = styled.div`
  width:100px;
  height:129px;
  place-self: center;
  `
export const Title = styled.h1`
  /* font-family: Monument Grotesk; */
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 92.7%;
  text-align: center;
  letter-spacing: -0.05em;
  margin-top:36px;
  margin-bottom:16px;
  ${ResponsiveTo()}{
    font-size: 60px;
    line-height: 74px;
  }
  ${ResponsiveTo('Desktop15')}{
    font-size: 72px;
    line-height: 74px;
  }
`
export const Text = styled.p`
  /* font-family: Monument Grotesk; */
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34.73px;
  text-align: center;
  letter-spacing: -0.05em;
  margin-bottom:36px;
  ${ResponsiveTo()}{
    font-size: 32px;
    line-height: 32px;
  }
  ${ResponsiveTo('Desktop15')}{
    font-size: 36px;
    line-height: 52px;
  }
`
export const InputContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
  width: 100%;
  align-items:center;

  input{
    outline:none;
    width:314px;
    height: 32px;
    background:transparent;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 152px;
    margin-bottom:32px;
    color:white; 
    padding: 0 36px;
    font-size:24px;
    
  }
  ${ResponsiveTo()}{
    flex-direction:row;
    input{
    width: 788px;
    height: 61px;
    margin-bottom:0;
    margin-right: 32px;
    }
  }

  ${ResponsiveTo('Desktop15')}{
    flex-direction:row;
    input{
    width: 688px;
    height: 71px;
    margin-bottom:0;
    margin-right: 32px;
    }
  }

  
`
export const SignButton = styled(TransparentButton)`
  place-self: center;
  width:85px;
  height: 32px;
  font-size:14px;

  ${ResponsiveTo()}{
    font-size:24px;
    width:180px;
    height: 61px;
  }
  ${ResponsiveTo('Desktop15')}{
    font-size:24px;
    width:180px;
    height: 81px;
  }

`
