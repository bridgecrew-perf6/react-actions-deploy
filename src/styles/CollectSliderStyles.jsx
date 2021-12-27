import styled from 'styled-components'
import bgImage from '../assets/images/bgSlider.png'
import imgCoin1 from '../assets/images/imgCollet-coin-1.svg'
import imgCoin2 from '../assets/images/imgCollet-coin-2.svg'
import imgMobCoin1 from '../assets/images/imgMobCollet-coin-1.svg'
import imgMobCoin2 from '../assets/images/imgMobCollet-coin-2.svg'
import { ResponsiveTo } from '../hooks/useResponsive'
import { BlackBtn } from './Buttons'

export const Section = styled.section`
  width: 100%;
  height: 424px;
  background-image: url(${imgMobCoin1}), url(${imgMobCoin2}), url(${bgImage});
  background-size: auto, auto, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position-x:160%, -90px, center;
  background-position-y:90%, 90%, center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  ${ResponsiveTo()}{
    height: 604px;
    background-image: url(${imgCoin2}), url(${imgCoin1}), url(${bgImage});
    background-size: auto, auto, cover;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position-x:100%, 120%, center;
    background-position-y:-80px, 130%, center;
  }
  ${ResponsiveTo('Desktop22')}{
    background-position-x:90%, 110%, center;
  }
  
`

export const Container = styled.div`
  width:100%;
  position: static;
  margin:100px 0;
  z-index: 1;
`
export const Grid = styled.div`
  display:grid;
  flex-direction:repeat(auto-fill,400px);
  width:100%;
  ${ResponsiveTo()}{

    display: grid;
    grid-template-columns: 1fr 1fr;
    
    place-self: center;
    padding: 0 82px;
  } 
`
export const TextBox = styled.section`
  color:white;
  padding:0px 32px;
  text-align:center;
  h1{
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 39px;
      
  }
  p{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    margin-top:44px;
    margin-bottom:24px;
  }

  ${ResponsiveTo()}{
  text-align:left;
  h1{
    font-size: 96px;
    line-height: 76px;
      
  }
  p{
    font-size: 36px;
    line-height: 46px;
    font-family:'Monument Grotesk Semi-Mono';
  }
  }

`
export const ImgContainer = styled.div`
  width:100%;
  height: 71px;
  display:flex;
  justify-content:center;
  align-items: center;
  margin: 20px auto;
  img{
    width:100%; height:100%;
  }
  ${ResponsiveTo()}{
    width:100%;
    height: 100%;
    img{
      width:395px; height:196px;
    }
  }
`
export const Paginator = styled.ul`
  display:flex;
  margin:36px 0; 
  justify-content: center;
  li{
    color: rgba(234, 238, 229, 0.79);
    
    width: 8px;
    height: 13px;
    border-radius: 50%;
    border: 3px solid rgba(234, 238, 229, 0.79);
    margin: 0 5px;
    cursor:pointer;
  }
  ${ResponsiveTo()}{
    li{
      width: 18px;
      height: 24px;
    }
  }

`
export const Button = styled(BlackBtn)`
  padding: 4px 16px;
  font-size: 14px;  
  margin: 0 auto;
  ${ResponsiveTo()}{
    margin:0;
    padding: 16px 24px;
    font-size:24px
  }
`
