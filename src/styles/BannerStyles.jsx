import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import { vibrateAnimation } from './Animations'
import { WhiteBtn } from './Buttons'
export const Container = styled.header`
  width: 97vw;
  height: 100vh;
  background:transparent;
 
  display:flex;
  align-items: center;
 
  ${ResponsiveTo()}{
    height: 909px;
    background-size:auto;
  }
  ${ResponsiveTo('Desktop22')}{
      
    background-size:cover;
    background-position-y: -100px;
  }

`
export const Grid = styled.section`
  display:flex;
  width:60%;  
  align-items:center; 
  margin: 0 auto;
  position:relative;
  z-index:1;
  
`
export const VideoContainer = styled.div`
  display:flex;
  width:100%;
  height:100vh;
  top:0;
  position:absolute;
  z-index:0;
  overflow:hiden;
  video{
    margin:0;
    padding:0;
    width:100%;
    object-fit:cover;
  }
`

export const TextBox = styled.div`
  
  display: flex;
  flex-flow:column nowrap;
  color: white;

  h1{
    font-weight: bold;
    font-size: 40px;
    line-height: 51px;
    letter-spacing: -0.05em;
    margin-bottom:44px;
  }

  ${ResponsiveTo()}{
    h1{
    font-weight: bold;
    font-size: 96px;
    line-height: 111px;
    letter-spacing: -0.05em;
    }
  }
  
`
export const MenuContainer = styled.div`
  padding-left:0px
  display:flex;
  
  ${ResponsiveTo('Desktop22')}{
    padding-left:50px
  }
`
export const Icon = styled.div`
  
  width: 35px;
  height: 35px;
  margin-left: 10px;
  display:none;
  ${vibrateAnimation({ time: '1s', type: 'ease' })}
  svg{
    cursor:pointer;
    path{
    fill:white;
    }
  }
  ${ResponsiveTo()}{
    display:block;
    width: 49px;
    height: 65px;
    transition:all .3s;
    transform:${props => props.showSubMenu ? 'rotate(45deg)' : 'rotate(0deg)'} ;
    margin-top: -20px;
  }
`
export const SubMenu = styled.ul`
  position: absolute;
  margin-left:80px;
  margin-top:-68px;
  transition:all .3s;
  display:none;
 
  ${ResponsiveTo()}{
  ${props => props.showSubMenu
    ? css`
        display:block;
        width:auto;
      `
    : css`
        display:none;
        
      `
   }
  }
   
  list-style: none;
  li{
    border-bottom: 2px black solid;
    font-size:24px;
    font-family:'Monument Grotesk Semi-Mono';
  }
  a{
    text-decoration: none;
    color: white;
  }
  
`
export const LMBtn = styled(WhiteBtn)`
  font-size: 14px;
  padding: 4px 16px;
  margin: 20px 0;
  max-width:104px;
  
  ${ResponsiveTo()}{
    max-width:196px;
    padding: 16px 24px;
    font-size: 24px;
  }
`
