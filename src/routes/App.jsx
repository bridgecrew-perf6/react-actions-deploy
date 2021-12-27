import { useState } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'

// Pages
import Home from '../pages/Home'
import FilmcoinPage from '../pages/FilmcoinPage'
import TfttPage from '../pages/TfttPage'
import PaymentStepper2 from '../components/PaymentStepper2'
import PaymentStepper1 from '../components/PaymentStepper1'
import Error from '../components/Error'
import Success from '../components/Success'
import ContactPage from '../pages/ContactPage'
import VerySoon from '../pages/VerySoon'

function App () {
  // State
  const [popupIsOpen, setPopupIsOpen] = useState(false)
  const [showLogo, setShowLogoNav] = useState(false)

  // Functions
  const changeLogo = (value) => {
    setShowLogoNav(value)
  }

  return (
    <HashRouter>
      <Navbar
        showLogo={showLogo}
        changeLogo={changeLogo}
        popupIsOpen={popupIsOpen}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              popupIsOpen={popupIsOpen}
              setPopupIsOpen={setPopupIsOpen}
            />
          }
        />
        <Route exact path='/filmcoin' element={<FilmcoinPage changeLogo={changeLogo} />} />
        <Route exact path='/tftt' element={<TfttPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/error' element={<Error />} />
        <Route exact path='/success' element={<Success />} />
        <Route exact path='/payment2' element={<PaymentStepper2 />} />
        <Route exact path='/payment1' element={<PaymentStepper1 />} />
        <Route exact path='/verysoon' element={<VerySoon />} />
      </Routes>
    </HashRouter>
  )
}

export default App
