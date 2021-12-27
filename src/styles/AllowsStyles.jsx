import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import { BubbleAnimation } from './Animations'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: radial-gradient(121% 97.12% at 97.56% 50.88%, #007233 0%, #004620 25.29%, rgba(6, 2, 2, 0.98) 99.99%, rgba(0, 0, 0, 0) 100%);
  
  ${ResponsiveTo()}{
    background : -moz-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
    background : -webkit-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
    background : -webkit-gradient(radial,111.77% 50% ,0 , 111.77% 50%, 1826.82 ,color-stop(0,rgba(0, 237, 101, 1) ),color-stop(0.0809,rgba(4, 200, 87, 1) ),color-stop(0.1999,rgba(8, 153, 70, 1) ),color-stop(0.323,rgba(12, 113, 55, 1) ),color-stop(0.4481,rgba(15, 79, 43, 1) ),color-stop(0.576,rgba(18, 54, 33, 1) ),color-stop(0.7078,rgba(20, 35, 26, 1) ),color-stop(0.8457,rgba(21, 25, 22, 1) ),color-stop(1,rgba(21, 21, 21, 1) ));
    background : -o-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
    background : -ms-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);"
    background : radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);

   
  }

`

export const Contain = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction:column;
  height: 100%;
  justify-content: center;
  padding: 0 47px;
  
  ${ResponsiveTo()}{
    
    padding: 0 80px;
    .grid-allow{
      display:grid;
      grid-template-columns: 1fr 1fr;
      place-self: center;
    }
  }
`

export const IconContainer = styled.div`
  text-align:center;
  img{
    width: 85px;
    height: 42px;
  }
`
export const Title = styled.h1`
  font-family:'Monument Extended';
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 132.5%;
  text-transform: uppercase;
  color: white;
  margin-bottom: 30px;
  ${ResponsiveTo()}{
    font-family:'Monument Extended';
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 132.5%;
    margin:0;
    display: flex;
    align-items: center;
  }

`
export const Text = styled.div`
  font-family: 'Monument Grotesk Semi-Mono';
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 171%;
  color: #FFFFFF;
  p:nth-child(1){
    margin-bottom: 20px;
  }
  ${ResponsiveTo()}{
    padding-left:74px;
    font-size: 1.5rem;
    line-height:30.78px;

  }

`

export const BubbleContainer = styled.div`
  display:flex;
  position:fixed;
  top:0;
  z-index:9;
  width:100%;
  height:100vh;
  background: transparent;

  .bubble:nth-child(1){
    position:relative;
    top:50%;
    left:-100px;
    width:550px;
    height:550px;
    border-radius:50%;
    background-image: radial-gradient(farthest-corner at 40px 40px,
      #c9ff33 0%, #00a50e 100%);
    transform:translate(40px,0px);
    //transform:translate(-10px,20px)
    ${BubbleAnimation({ time: '20s', type: 'linear' })} 
  }
  .bubble:nth-child(2){
    position:relative;
    left:30%;
    top:-200px;
    width:580px;
    height:580px;
    border-radius:50%;
    background-image: radial-gradient(farthest-corner at 40px 40px,
      #c9ff33 0%, #00a50e 100%);
    transform:translate(40px,0px);
    //transform:translate(-10px,20px)
    ${BubbleAnimation({ time: '23s', type: 'linear' })} 
  }

`
