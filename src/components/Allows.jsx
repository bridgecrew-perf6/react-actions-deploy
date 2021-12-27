import React from 'react'
import {
  Section,
  Contain,
  Title,
  Text,
  BubbleContainer
} from '../styles/AllowsStyles'
import Particles from 'react-tsparticles'

export default () => {
  const configParticles = {
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push'
        },
        onHover: {
          enable: false,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#018d40'
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: true,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'circle'
      },
      size: {
        random: false,
        value: 4
      }
    },
    detectRetina: true
  }

  return (
    <Section>
      <Contain>

        <div className='grid-allow'>
          <Title>
            Allows Everyone To Participate In Film & Television

          </Title>
          <Text>
            <p>
              The film, television and digital entertainment marketplace,
              is filled with multiple opportunities to integrate blockchain,
              distributed ledger cryptocurrency technology and smart contracts.
            </p>

            <p>
              These businesses combined are potentially the largest grossing
              and widely spread industries on the planet These industries provide content across film, television, radio, commercials, streaming audio and video content,
              publishing, video games and many other ancillary services
            </p>

          </Text>
        </div>

      </Contain>
      <Particles
        id='tsparticles'
        options={configParticles}
      />
      <BubbleContainer style={{ display: 'none' }}>
        <div className='bubble' />
        <div className='bubble' />
      </BubbleContainer>

    </Section>
  )
}
