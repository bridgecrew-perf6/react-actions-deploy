import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import Particles from 'react-tsparticles'

export const BtnContainer = styled.div`
  position: absolute;
  height:0;
  z-index: 20; 
  margin-top: -20%; 
  width: 100%;
  text-align: center;
  ${ResponsiveTo('Tablet')}{
    margin-top: -10%; 
  }
  
`

// EfectScroll
export const Container = styled.main`
scroll-snap-type: y mandatory;
overflow-y:scroll;
width:100%;
height:100vh;


`

export const Section = styled.section`
height:100vh; 
display:flex;
justify-content:center;
align-itens:center;
flex-direction:column;
scroll-snap-align:start;
`
export const CustomParticles = styled(Particles)`
  canvas{
    position:absolute !important;
  }
`
