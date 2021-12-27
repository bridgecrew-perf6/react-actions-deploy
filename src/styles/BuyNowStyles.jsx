import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'
import { TransparentButton } from './Buttons'

export const Section = styled.section`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width:100%;
  height:100vh;
  /* padding:100px 0; */
  /*Background*/
  background : -moz-radial-gradient(94.09% 126.25%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 192, 84, 1) 9.62%, rgba(9, 147, 68, 1) 20.71%, rgba(13, 108, 53, 1) 32.28%, rgba(16, 76, 42, 1) 44.17%, rgba(18, 52, 32, 1) 56.48%, rgba(20, 35, 26, 1) 69.39%, rgba(21, 24, 22, 1) 83.3%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-radial-gradient(94.09% 126.25%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 192, 84, 1) 9.62%, rgba(9, 147, 68, 1) 20.71%, rgba(13, 108, 53, 1) 32.28%, rgba(16, 76, 42, 1) 44.17%, rgba(18, 52, 32, 1) 56.48%, rgba(20, 35, 26, 1) 69.39%, rgba(21, 24, 22, 1) 83.3%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-gradient(radial,94.09% 126.25% ,0 , 94.09% 126.25%, 1401.92 ,color-stop(0,rgba(0, 237, 101, 1) ),color-stop(0.0962,rgba(4, 192, 84, 1) ),color-stop(0.2071,rgba(9, 147, 68, 1) ),color-stop(0.3228,rgba(13, 108, 53, 1) ),color-stop(0.4417,rgba(16, 76, 42, 1) ),color-stop(0.5648,rgba(18, 52, 32, 1) ),color-stop(0.6939,rgba(20, 35, 26, 1) ),color-stop(0.833,rgba(21, 24, 22, 1) ),color-stop(1,rgba(21, 21, 21, 1) ));
  background : -o-radial-gradient(94.09% 126.25%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 192, 84, 1) 9.62%, rgba(9, 147, 68, 1) 20.71%, rgba(13, 108, 53, 1) 32.28%, rgba(16, 76, 42, 1) 44.17%, rgba(18, 52, 32, 1) 56.48%, rgba(20, 35, 26, 1) 69.39%, rgba(21, 24, 22, 1) 83.3%, rgba(21, 21, 21, 1) 100%);
  background : -ms-radial-gradient(94.09% 126.25%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 192, 84, 1) 9.62%, rgba(9, 147, 68, 1) 20.71%, rgba(13, 108, 53, 1) 32.28%, rgba(16, 76, 42, 1) 44.17%, rgba(18, 52, 32, 1) 56.48%, rgba(20, 35, 26, 1) 69.39%, rgba(21, 24, 22, 1) 83.3%, rgba(21, 21, 21, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);"
  background : radial-gradient(94.09% 126.25%, ellipse farthest-corner, rgba(0, 237, 101, 1) 0%, rgba(4, 192, 84, 1) 9.62%, rgba(9, 147, 68, 1) 20.71%, rgba(13, 108, 53, 1) 32.28%, rgba(16, 76, 42, 1) 44.17%, rgba(18, 52, 32, 1) 56.48%, rgba(20, 35, 26, 1) 69.39%, rgba(21, 24, 22, 1) 83.3%, rgba(21, 21, 21, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
`
export const Grid = styled.div`
  psition:relative;
  z-index:9;
  display: grid;
  justify-content:center;
  
  margin:0;
 
  ${ResponsiveTo('Tablet')}{
    grid-template-columns: repeat(auto-fill,500px);
    margin:0 auto;
    width:80%;
  }
  ${ResponsiveTo()}{
    
    grid-template-columns: repeat(2,700px);
  }
  
`
export const Col = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:white;
  padding: 0 16px;
  width:100%;}
  ul, li {
    font-weight: lighter;
    list-style-type: disc;
    font-size: 1rem;
    margin-bottom:12px;
    /* or 202% */
  }
  ul{
    margin-top:40px;
    margin-left:24px;
  }
 
  img{
    width:100%;
    object-fit:contain;
  }
  
  ${ResponsiveTo()}{
    align-items:left;
    justify-content:start;
    padding: 0 ;
    ul, li {
    list-style-type: disc;
    font-size: 1.5rem;
    line-height: 48px;
    margin-bottom:0px;
    /* or 202% */

    letter-spacing: -0.03em;
   }
   ul{
     margin-top:0;
     margin-left:0;
   }
  }
`

export const GreenButton = styled(TransparentButton)`
  padding:12px 20px;
  position:relative;
  margin-bottom:40px;
  z-index:8;
  font-size:16px;
  font-family: 'Monument Extended', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 36px;
  border:0;
  background-color: rgb(0, 146, 66,0.5);
  &:hover{
    border:1px solid #009242;
  }
  display:none;
  ${ResponsiveTo()}{
    padding:12px 24px;
    margin-bottom:0px;
    margin-top:100px;
    font-size: 24px;
    width:250px;
    display:block;
  }
`
export const GreenButton2 = styled(TransparentButton)`
  padding:12px 20px;
  position:relative;
  margin-top:40px;
  margin-bottom:40px;
  z-index:8;
  font-size:16px;
  font-family: 'Monument Extended', sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 36px;
  border:0;
  background-color: rgb(0, 146, 66,0.5);
  &:hover{
    border:1px solid #009242;
  }

  ${ResponsiveTo()}{
    padding:12px 24px;
    margin-bottom:0px;
    margin-top:100px;
    font-size: 24px;
    width:250px;
    place-self:baseline;
    display:none;
  }
`

export const GifContainer = styled.div`
  width:100%;
  height:100vh;
  position: absolute;
  z-index:1;
  display:flex;
  overflow:hidden;
`

export const GifText = styled.div`
  width: 411px;
  height: 461px;
  padding:10px;
  position: absolute;
  left:-100px;
  top:480px;
  transform:scale(0.5);
  img{
    width:100%;
    height:100%;
    
  }
  ${ResponsiveTo()}{
    transform:scale(1);
  }
`
export const Title = styled.p`
  font-family: 'Monument Extended', sans-serif;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 116.5%;
  font-weight: 400;
  text-align:center;
  margin-bottom:20px;
  text-transform: uppercase;
  span{
    color: #009242;
  }
  ${ResponsiveTo()}{
    margin-bottom:0px;
    text-align:center;
    font-size: 4rem;
    font-weight: bold;
    line-height: 73px;
    
  }

`
