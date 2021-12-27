import styled from 'styled-components'
import { ResponsiveTo } from '../hooks/useResponsive'

export const VideoSection = styled.section`
  padding: 1rem 0;
  min-height: 90vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: -1;
`

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  ${ResponsiveTo('1600px')}{
      margin: 0 auto;
  }
`

export const Video = styled.div`
  margin: 2.5rem 0 2rem 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
