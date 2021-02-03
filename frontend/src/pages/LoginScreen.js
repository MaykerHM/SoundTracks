import React from 'react'
import { Col } from '../styles'

const LoginScreen = () => {
  return (
    <Col>
      <form>
        <h1>Logo</h1>
        <h3>Username</h3>
        <input type='text' placeholder='Username' />
        <h3>Password</h3>
        <input type='text' placeholder='Password' />
      </form>
    </Col>
  )
}

export default LoginScreen
