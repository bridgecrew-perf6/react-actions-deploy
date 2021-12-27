import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import { BlackBtn } from './Buttons'
import imgText from '../assets/images/OurServicesText.svg'
export const Section = styled.section`
  background-color: #1E1F1F;
  width: 100%;
  height: 173px;
  display: flex;
  align-items: center;
  ${ResponsiveTo()}{
    height: 323px;
  }
`
export const Title = styled.h1`
  width:100%;
  height:310px;
  background-image:url(${imgText});
  background-size:contain;
  background-repeat:no-repeat;
  position: absolute;
  margin-top: 60px;
  display:none;
  ${ResponsiveTo()}{
    top:-100px;
    display:none;
  }
  
`
export const BtnBox = styled.div`
  display: flex;
  
  width: 100%;
  
  justify-content: center;
  justify-content: space-between;
  padding: 20px 20px; 
  
  
  ${ResponsiveTo()}{
    justify-content: space-between;
    padding: 10px 120px; 
    height: 56px;
  }

`

export const Button = styled(BlackBtn)`
    padding:4px 16px;
    font-size: 14px;
    ${ResponsiveTo()}{
      height: 56px;
      font-size: 24px;
      padding:16px 24px;
    }
`
