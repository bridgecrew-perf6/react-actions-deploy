import * as React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
// import ReactFileReader from 'react-file-reader'
// import axios from 'axios'
// import FormData from 'form-data'
// images
import fclogo from '../assets/payment/fclogo.png'
import check from '../assets/payment/check.png'
import nocheck from '../assets/payment/nocheck.png'
import line from '../assets/payment/line.png'

// Styles
import '../styles/PaymentStepper1.css'

export default function PaymentStepper1 () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = React.useState({
    email: '',
    country: '',
    name: '',
    lastname: '',
    address: '',
    wallet: '',
    city: '',
    province: '',
    zipcode: '',
    phone: '',
    kycDocumnet: null

  })
  // async function postForm (data) {
  //   const baseURL = "http://192.168.1.8:5000/"
  //   try {
  //     const response = await axios.post('http://f736-2800-484-aa81-c240-1ce5-a02b-ed71-e57b.ngrok.io/api/sendinfo', data)
  //     console.log(response)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const Form = React.useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // const formData = new FormData(Form.current)
    // const data = {
    //   email: formData.get('email'),
    //   country: formData.get('country'),
    //   name: formData.get('lastName'),
    //   lastname: formData.get('lastName'),
    //   address: formData.get('address'),
    //   wallet: formData.get('wallet'),
    //   city: formData.get('city'),
    //   province: formData.get('province'),
    //   zipcode: formData.get('zipcode'),
    //   phone: formData.get('phone'),
    //   kycDocumnet: formData.get('kycDocumnet')
    // }
    // postForm(data)
  }

  const handleChangeFile = (e) => {
    const input = e.target
    if (input.files[0]) {
      const reader = new FileReader()
      console.log(input.files[0])
      reader.onload = function () {
        setFormData((formData) => ({
          ...formData,
          kycDocumnet: input.files[0]
        }))
        console.log(input.files[0])
      }
      reader.readAsDataURL(input.files[0]) // for preview

      // if (photo.current.value) {
      //   tooltip.current.innerHTML = photo.current.value.replace(/^.*\\/, '')
      // } else {
      //   tooltip.current.innerHTML = 'No photo chosen, yet.'
      // }
    }
  }

  return (
    <>
      <div className='Payment__stepper'>
        <div>
          <div className='stepper__div'>
            <img src={check} alt='Check logo' />
            <img src={line} alt='Line logo' />
            <img src={nocheck} alt='No check logo' />
          </div>
          <img src={fclogo} alt='payment' />
          <p>You’re almost ready to join us and <br /> become part of the filmcoin family! </p>
        </div>

        <div>
          <form className='Payment__stepper-form' ref={Form}>
            <h1>Contact information</h1>
            <label htmlFor='email'>Email</label>
            <input onChange={handleChange} value={formData.email} name='email' type='email' placeholder='Alex Smith' />
            {/* <label htmlFor='country'>Country/Region</label>
            <select name='country'>
              <option value='value1'>Value 1</option>
              <option value='value2' selected>Value 2</option>
              <option value='value3'>Value 3</option>
            </select> */}
            <div>
              <div>
                <label htmlFor='firstName'>Name</label>
                <input onChange={handleChange} value={formData.firstName} name='firstName' type='name' placeholder='Josh' />
              </div>
              <div>
                <label htmlFor='lastName'>Last name</label>
                <input onChange={handleChange} value={formData.lastName} name='lastName' type='name' placeholder='Blish' />
              </div>
            </div>
            <label htmlFor='address'>Address</label>
            <input onChange={handleChange} value={formData.address} name='address' type='text' placeholder='Av. 9012 H-12' />
            {/* <div>
              <div>
                <label htmlFor='city'>City</label>
                <input onChange={handleChange} value={formData.city} name='city' type='name' placeholder='Josh' />
              </div>
              <div>
                <label htmlFor='province'>Province</label>
                <select name='province'>
                  <option value='value1'>Value 1</option>
                  <option value='value2' selected>Value 2</option>
                  <option value='value3'>Value 3</option>
                </select>
              </div>
              <div>
                <label htmlFor='zipcode'>Zip code</label>
                <input onChange={handleChange} value={formData.zipcode} name='zipcode' type='name' placeholder='080013' />
              </div>
            </div> */}
            <label htmlFor='phone'>Phone</label>
            <input onChange={handleChange} value={formData.phone} name='phone' type='number' placeholder='784927492' />
            <label htmlFor='kycDocumnet'>KYC document (passport or driver’s license)</label>
            <input onChange={handleChangeFile} name='kycDocumnet' className='fileInput' type='file' id='kycDocumnet' placeholder='Choose a file' />
            <div className='div-100'>
              <button><Link to='/'>Cancel</Link></button>
              <button onClick={handleSubmit} type='submit'><Link to='/verysoon'>Continue to payment</Link></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
