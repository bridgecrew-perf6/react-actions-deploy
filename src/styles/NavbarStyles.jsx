import styled, { css } from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import { ReactComponent as Close } from '../assets/icons/CloseIcon.svg'

export const Nav = styled.nav`
  ${props => props.popupIsOpen && css`display: none;`}
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 20;
  background: rgb(0,0,0);
  background: linear-gradient(
                180deg,
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,0.7) 50%, 
                rgba(0,0,0,0) 100%
              );
  
`
export const Head = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
width: 80%;
margin: 38px auto;
`
export const Text = styled.h1`
  color: white;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  height: 42px;
  display:flex;
  align-items:center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  ${ResponsiveTo()}{
    height: 77px;
  }
`
export const Logo = styled.div`
  width: 85px;
  height: 42px;
  
  img{
    width: 100%;
    height: 100%;
  }
  ${ResponsiveTo()}{
    width: 155px;
    height: 77px;
  }
`

export const MenuIcon = styled.div`
  width: 56px;
  height: 34.03px; 
  
  img{
    background-color: black;
    border-radius:20px;
    transition: all .2s;
    border:1px solid #303030;
    cursor:pointer;
    &:hover{
      border-radius:50%;
    }
  }

`

export const SearchIcon = styled.div`
  width: 33px;
  height: 33px;
  position:relative;
  input{
    display: none;
  }
`

export const CloseIcon = styled(Close)`
  width: 0.75rem;
  color: white;
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width:100%;
  color:white;
  padding-top: 40px;
  position: absolute;
  
  
  z-index: 2;
  display:block;
  text-align:left;
  top:-500px;
    transition: all .5s;
    top:${props => props.showMenu && '0px'};
  li{
    display: grid;
    transition: all .5s;
    cursor: pointer;
    font-size: 16px;
    
    a{
      margin:12px 0;
      width:100%;
      text-decoration: none;
      text-transform: uppercase;
      color: rgb(153, 153, 153);
      text-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    &:hover{
      color:white;
      font-size:18px;
      a{
        color:white;
      }
    }
  }
  ${ResponsiveTo()}{
    width:300px;
    top:-400px;
    transition: all .5s;
    top:${props => props.showMenu && '0px'};
  }
`
export const CloseBtn = styled.button`
  width: 56px;
  height: 34.03px;
  cursor: pointer;
  color:white;
  background-color: black;
  border-radius: 20px;
  font-size:28px;
  ${ResponsiveTo()}{
    display: none;
  }
`
