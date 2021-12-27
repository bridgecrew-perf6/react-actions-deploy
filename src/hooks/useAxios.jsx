import { useState, useEffect } from 'react'
import axios from 'axios'

const postForm = () => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const response = await axios.post('http://f736-2800-484-aa81-c240-1ce5-a02b-ed71-e57b.ngrok.io/')
    setProducts(response.data)
  }, [])
  return products
}

export default postForm
