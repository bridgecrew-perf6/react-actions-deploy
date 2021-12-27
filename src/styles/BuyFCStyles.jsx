import styled from 'styled-components'
import { TransparentButton } from './Buttons'
import { ResponsiveTo } from '../hooks/useResponsive'

export const BuyFCSection = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background : -moz-radial-gradient(-36.85% 55.21%, ellipse farthest-side, #00ed65 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgb(21, 21, 21) 100%);
  background : -webkit-radial-gradient(-36.85% 55.21%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -webkit-gradient(radial,-36.85% 55.21% ,0 , -36.85% 55.21%, 1113.91 ,color-stop(0,rgba(0, 237, 101, 1) ),color-stop(0.0809,rgba(4, 200, 87, 1) ),color-stop(0.1999,rgba(8, 153, 70, 1) ),color-stop(0.323,rgba(12, 113, 55, 1) ),color-stop(0.4481,rgba(15, 79, 43, 1) ),color-stop(0.576,rgba(18, 54, 33, 1) ),color-stop(0.7078,rgba(20, 35, 26, 1) ),color-stop(0.8457,rgba(21, 25, 22, 1) ),color-stop(1,rgba(21, 21, 21, 1) ));
  background : -o-radial-gradient(-36.85% 55.21%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  background : -ms-radial-gradient(-36.85% 55.21%, ellipse farthest-side, rgba(0, 237, 101, 1) 0%, #04c857 8.09%, #089946 19.99%, rgba(12, 113, 55, 1) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2)";
  background: radial-gradient(-36.85% 55.21%, ellipse farthest-side, #0e1812 0%, rgba(4, 200, 87, 1) 8.09%, rgba(8, 153, 70, 1) 19.99%, rgb(12, 113, 55) 32.3%, rgba(15, 79, 43, 1) 44.81%, rgba(18, 54, 33, 1) 57.6%, rgba(20, 35, 26, 1) 70.78%, rgba(21, 25, 22, 1) 84.57%, rgba(21, 21, 21, 1) 100%);
  filter: 'progid:DXImageTransform.Microsoft.Alpha(Stlye=2)';
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 1rem;
  color: #fff;
  ${ResponsiveTo('640px')} {
    padding: 3rem 2rem;
  }
  ${ResponsiveTo('Tablet')} {
    gap: 2rem;
  }
  ${ResponsiveTo()} {
    gap: 3rem;
  }
  ${ResponsiveTo('Desktop15')} {
    gap: 3.75rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 116.5%;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  ${ResponsiveTo('640px')} {
    font-size: 2.5rem;
  }
  ${ResponsiveTo()} {
    font-size: 4rem;
  }
`

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Monument Grotesk mono', sans-serif;
  text-align: center;
  ${ResponsiveTo('640px')} {
    font-size: 1.25rem;
  }
  ${ResponsiveTo()} {
    font-size: 1.5rem;
  }
`

export const Button = styled(TransparentButton)`
  font-family: 'Monument Extended', sans-serif;
  padding: 0.5rem 1rem;
  ${ResponsiveTo()} {
    font-size: 1.5rem;
    padding: 1.25rem 1.75rem;
  }
`

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const DownloadTitle = styled.h3`
  font-family: 'Monument Extended', sans-serif;
  font-size: 1.5rem;
  line-height: 116.5%;
  text-transform: uppercase;
`

export const AssetsContainer = styled.div`
  display: flex;
  gap: 3rem;
`

export const Asset = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AssetTitle = styled.h4`
  font-family: 'Monument Grotesk', sans-serif;
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.5;
  ${ResponsiveTo()} {
    font-size: 0.875rem;
  }
`
export const Text = styled.div`
  font-size:1rem;
  text-align:center;
  max-width:1024px;
  font-family: 'Monument Grotesk', sans-serif;
  line-height: 1.5;
  ${ResponsiveTo()}{
    font-size:1.5rem;
  }
`
