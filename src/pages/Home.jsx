import {
  useEffect,
  useRef
} from 'react'
// Components
import BlackFooter from '../components/BlackFooter'
import Popup from '../components/Popup'
import VideoSection from '../components/VideoSection'

// import { Container, Section } from '../styles/HomeStyles'
import { ReactComponent as WhiteRowDown } from '../assets/icons/rowDown.svg'
import BuyNow from '../components/BuyNow'
import { BtnContainer, CustomParticles } from '../styles/HomeStyles'
import BuyFC from '../components/BuyFC'

// TODO: Convert this component into a Portal using React.createPortal
export default ({ popupIsOpen, setPopupIsOpen }) => {
  // State
  useEffect(() => {
    setPopupIsOpen(true)
    popupIsOpen && (document.body.style.overflow = 'hidden')
    return () => {
      setPopupIsOpen(false)
    }
  }, [])

  const handlePopupClose = () => {
    setPopupIsOpen(false)
  }

  const useScroll = () => {
    const elRef = useRef(null)
    const executeScroll = () => elRef.current.scrollIntoView()

    return [executeScroll, elRef]
  }

  const [executeScroll, elRef] = useScroll()

  // Ts Particles Config
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
          enable: true,
          mode: 'repulse'
        },
        onHover: {
          enable: true,
          mode: 'grab'
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
    <div>
      <Popup
        isOpen={popupIsOpen}
        onClose={handlePopupClose}
      />
      <section>
        <VideoSection />
        {!popupIsOpen && (
          <BtnContainer>
            <button onClick={executeScroll} style={{ cursor: 'pointer' }}>
              <WhiteRowDown />
            </button>
          </BtnContainer>
        )}
      </section>

      {!popupIsOpen && (
        <section ref={elRef}>
          <div style={{ position: 'relative' }}>
            <BuyFC />
            <BuyNow />
            <CustomParticles
              id='tsparticles'
              options={configParticles}
            />
          </div>
          <BlackFooter />

        </section>
      )}

    </div>
  )
}
