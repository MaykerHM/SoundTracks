import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { logout } from '../actions/userActions'

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
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/login')
  }
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
      {userInfo ? <button onClick={logoutHandler}>Sair</button> : null}
    </StyledNav>
  )
}

export default Nav
