import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Nav from './components/Nav'
import HomeScreen from './pages/HomeScreen'
import AlbumsScreen from './pages/AlbumsScreen'
import AlbumScreen from './pages/AlbumScreen'
import LoginScreen from './pages/LoginScreen'
import AdminScreen from './pages/AdminScreen'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        setIsAdmin(userInfo.isAdmin)
      }
    }
  }, [userInfo])

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/trilhas' exact component={AlbumsScreen} />
        <Route path='/trilhas/:id' component={AlbumScreen} />
        <Route path='/login' component={LoginScreen} />
        <ProtectedRoute
          path='/admin'
          component={AdminScreen}
          isAdmin={isAdmin}
        />
      </Switch>
    </Router>
  )
}

export default App
