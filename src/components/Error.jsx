import * as React from 'react'
import { Link } from 'react-router-dom'

// images
import fclogo from '../assets/payment/fclogo.png'
import check from '../assets/payment/check.png'
import error2 from '../assets/payment/error.png'
import line from '../assets/payment/line.png'
import coinslast from '../assets/payment/coinslast.png'

// Styles
import '../styles/PaymentStepper1.css'

export default function Error () {
  return (
    <>
      <div className='Payment__stepper'>
        <div>
          <div className='stepper__div'>
            <img src={check} alt='Check logo' />
            <img src={line} alt='Line logo' />
            <img src={error2} alt='Error logo' />
          </div>
          <img src={fclogo} alt='payment' />
          <p><bold>There was an error<br /> in your payment.</bold></p>
          <div className='div-4'>
            <button><Link to='/'>Back to home</Link></button>
            <button><Link to='/payment2'>Try Again</Link></button>
          </div>
          <div className='bg-coins2' />
        </div>

        <div>
          <img src={coinslast} alt='Coins' />
        </div>
      </div>
    </>
  )
}
