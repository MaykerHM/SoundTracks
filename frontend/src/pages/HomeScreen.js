import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const HomeScreen = () => {
  return (
    <Col>
      <h1>Home</h1>
    </Col>
  )
}

export default HomeScreen
