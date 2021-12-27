
import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'

export const Footer = styled.footer`
  margin-top: 100px;
  height: 100vh;
  ${ResponsiveTo()}{
    height: auto;
  }
`
export const Container = styled.div`
  margin: 0 52px;
  ${ResponsiveTo()}{
    margin: 0 126px;
  }
`
export const Title = styled.div`
  /* font-family: Monument Grotesk; */
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 40px;
  letter-spacing: -0.05em;
  margin-bottom: 38px;
  ${ResponsiveTo()}{
    font-size: 72px;
    line-height: 104px;
    margin-bottom: 0px;
  }

`
export const Grid = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  ${ResponsiveTo()}{
    flex-direction: row;
  }
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  h1{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
    letter-spacing: -5%;
    margin-bottom:8px;
  }
  p{
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -5%;
    margin-left:4px;
  }
  ${ResponsiveTo()}{
    padding: 24px 24px;
    h1{
      font-size: 36px;
      line-height: 31px;
      margin-bottom:24px;
    }
    
    p{
      display: flex;
      flex-flow:row nowrap;
      align-items: center;
      font-size:18px;
      line-height: 31px;
    }
  }
  
`
export const SubMenu = styled.ul`

  li{
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -5%;
    margin-left:4px;
    display: flex;
    flex-flow:row nowrap;
    align-items: baseline;
  }
  ${ResponsiveTo()}{
    
    li{
      font-size:18px;
      line-height: 31px;
    }
  }

`
export const Icon = styled.div`
 
  
  margin-left: 2px;
  display:block;
  cursor: pointer;
  transition:all .3s;
  transform:${props => props.showSubMenu ? 'rotate(135deg)' : 'rotate(0deg)'} ;
  svg{
    width: 9px;
    height: 9px;
  }
  ${ResponsiveTo()}{
    display:block;
   
    margin-left: 4px;
    svg{
      width: 11px;
      height: 11px;
    }
    
    
  }
`

export const Section = styled.section`
  padding: 50px 0;
`
export const SocialBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 236px;
  margin: 0 auto;
`
export const SocialItem = styled.a`
  cursor:pointer;
  width:30px;
  height: 30px;
  svg{
    width:100%;
    height: 100%;
  }
`

// black footer styles
export const BlackFooter = styled.footer`
   background: #171616;
   padding: 100px 20px;


`
export const BlackCol = styled.div`
  color:white;
  width:100%;
  text-align:center;
  margin-bottom:32px;
`
