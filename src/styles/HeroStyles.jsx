import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(100% 86.81% at 100% 19.45%, #009242 0%, #007434 11.46%, rgba(6, 2, 2, 0.98) 99.99%, rgba(0, 0, 0, 0) 100%);
 
  img{
    position: static;
    z-index: 10;
    width: 219px;
    height: 108px;
  }
  ${ResponsiveTo()}{
  
  background : -moz-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-gradient(radial,111.77% 50% ,0 , 111.77% 50%, 1826.82 ,color-stop(0,rgba(0, 237, 101, 1) ),color-stop(0.0809,rgba(4, 200, 87, 1) ),color-stop(0.1999,rgba(8, 153, 70, 1) ),color-stop(0.323,rgba(12, 113, 55, 1) ),color-stop(0.4481,rgba(15, 79, 43, 1) ),color-stop(0.576,rgba(18, 54, 33, 1) ),color-stop(0.7078,rgba(20, 35, 26, 1) ),color-stop(0.8457,rgba(21, 25, 22, 1) ),color-stop(1,rgba(21, 21, 21, 1) ));
  background : -o-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -ms-radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);"
  background : radial-gradient(111.77% 50%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);

  img{ 
  width: 395px;
  height: 196px;
  }
  
  }
  
  
`
export const IconsContainer = styled.div`
  display:flex;
  position:fixed;
  width:100%;
  height:100%;
  div{
    position:absolute;
  }
  div:nth-child(1){
    top:350px;
    left:-150px;
    svg{
      width: 387px;
      height: 339px;
    }
  }
  div:nth-child(2){
    top:100px;
    right:-120px;
    svg{
      width: 364px;
      height: 267px;
    }
  }
  ${ResponsiveTo()}{

    div:nth-child(1){
      top:25%;
      left:-190px;
      svg{
        transform:scale(1.4)
      }
    }
    div:nth-child(2){
      top:25%;
      right:-150px;
      svg{
        transform:scale(1.4)
      }
      
    }

  }
  ${ResponsiveTo('Desktop15')}{

    div:nth-child(1){
      top:35%;
      left:-100px;
      svg{
        transform:scale(1.6)
      }
      
    }
    div:nth-child(2){
      top:35%;
      right:-100px;
      svg{
        transform:scale(1.6)
      }
    }

  }
`
