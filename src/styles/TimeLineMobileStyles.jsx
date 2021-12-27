import styled from 'styled-components'
import bgImg from '../assets/images/lineTimeline.png'
export const Container = styled.div`
  width:100vw;
  height:100vh;
  background: radial-gradient(130.14% 57.14% at 130.14% 47.03%, #0C7137 0.53%, #000000 100%);
  display:grid;
  align-items:center;
  justify-content:center;
  
`
export const Grid = styled.div`
  margin-top:80px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-image:url(${bgImg});
  background-repeat:no-repeat;
  background-size:100% 78.5%;
  background-position-x:center;
  background-position-y:16px;
  article:last-child{
    grid-column:3;
  }
`
