import React from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const LoaderSpinner = () => {
  return <Loader type='TailSpin' color='#000' height={100} width={100} />
}

export default LoaderSpinner
