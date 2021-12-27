import * as React from 'react'
import { useNavigate, Link } from 'react-router-dom'

// paypal
import { PayPalButton } from 'react-paypal-button-v2'

// images
import fclogo from '../assets/payment/fclogo.png'
// import visa from '../assets/payment/visacard.png'
import check from '../assets/payment/check.png'
import line from '../assets/payment/line.png'
import nocheck from '../assets/payment/nocheck.png'
import paypal from '../assets/payment/paypal.png'

// Styles
import '../styles/PaymentStepper2.css'
import Switch from './Switch'

const options = [
  {
    name: 'USD',
    value: 0.42,
    prefix: '$',
    min: 66.7
  },
  {
    name: 'GBP',
    value: 0.32,
    prefix: '£',
    min: 50
  }
]

export default function PaymentStepper2 () {
  const [currency, setCurrency] = React.useState(options[0])
  const [amount, setAmount] = React.useState(0)
  const history = useNavigate()

  const _handleSwitch = () => {
    currency === options[0]
      ? setCurrency(options[1])
      : setCurrency(options[0])
  }

  const _handleChange = (e) => {
    try {
      const num = Number.parseInt(e.target.value)
      if (num < 0) {
        return
      }
      setAmount(num)
    } catch {}
  }

  const exchange = (amount || 0) * currency.value

  const handlePaymentSuccess = (data) => {
    console.log(data)
    history('/success')
  }

  const handlePaymentError = (error) => {
    console.log(error)
    history('/error')
  }

  return (
    <>
      <div className='Payment__stepper2'>
        <div>
          <div className='stepper__div'>
            <img src={check} alt='Check logo' />
            <img src={line} alt='Line logo' />
            <img src={nocheck} alt='No check logo' />
          </div>
          <img src={fclogo} alt='payment' />
          <p>You’re almost ready to join us and <br /> become part of the filmcoin family! </p>
          <div className='bg-coins2' />
        </div>

        <div>
          <form className='Payment__stepper-form2'>
            <Switch handleSwitch={_handleSwitch} options={options} currentValue={currency} />
            <h1 className='h1-1'>Total FilmCoin Tokens</h1>
            <input
              id='input-form'
              type='number'
              min={Math.ceil(currency.min)}
              placeholder={`Min. amoun ${currency.min}`}
              onChange={_handleChange}
              value={amount}
            />
            {exchange < currency.min && <p role='alert'>Must be greater than {`${currency.prefix}${currency.min} ${currency.name}`}</p>}
            <h1 className='h1-2'>Payment Method</h1>
            <div className='div-1'>
              <div>
                <input type='checkbox' />
                {/* <p>PayPal</p> */}
                <img src={paypal} alt='Visa Card Logo' />
              </div>
            </div>

            <div className='div-2'>
              <div>
                <label>Reference</label>
                <p>Add any comment</p>
              </div>
              <div>
                <input type='text' />
              </div>
            </div>

            <div className='div-3'>
              <p>Payment Total</p>
              <p>{currency.prefix}{exchange.toFixed(2)}</p>
            </div>

            <div className='div-4'>
              <button><Link to='/'>Cancel</Link></button>
              {exchange >= currency.min && (
                <PayPalButton
                  amount={exchange}
                  options={{
                    clientId: 'Ae_Nm-_FkKMAU2ST4oomPxVgfCrAs300gJ-GvB3dlIiFS6ZuYZySPwA3jwTku0_hbxbWhq7oKop8_EaN'
                  }}
                  currency={currency.name}
                  onError={error => handlePaymentError(error)}
                  onCancel={data => console.log(data)}
                  onSuccess={data => handlePaymentSuccess(data)}
                  style={{
                    color: 'black',
                    shape: 'pill',
                    tagline: 'false'
                  }}
                />
              )}
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
