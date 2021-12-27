import styled from 'styled-components'
import { fadeInAnimation } from './Animations'

export const Section = styled.section`  
  
  ${fadeInAnimation({ time: '.5s' })}
`
export const BtnContainer = styled.div`
  position: absolute;
  z-index: 20;
  bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  img{
    cursor: pointer;
    
  }
  
`
