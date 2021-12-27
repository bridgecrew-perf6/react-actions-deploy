import {
  Iframe,
  Video,
  VideoContainer,
  VideoSection
} from '../styles/VideoSectionStyles'

export default () => {
  return (
    <VideoSection>
      <VideoContainer>
        <Video>
          <Iframe
            src='https://player.vimeo.com/video/579966680?autoplay=1&amp;loop=1&amp;muted=1'
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            scrolling='auto'
          />
        </Video>
      </VideoContainer>

    </VideoSection>
  )
}
