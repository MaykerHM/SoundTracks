import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background: black;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    width: 20vw;
  }
  a {
    text-decoration: none;
    color: white;
  }
`

const Nav = () => {
  return (
    <StyledNav>
      <Link to='/'>
        <h3>Logo</h3>
      </Link>
      <ul>
        <li>
          <Link to='/trilhas'>Trilhas</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav
