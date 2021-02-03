import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import HomeScreen from './pages/HomeScreen'
import AlbumsScreen from './pages/AlbumsScreen'
import AlbumScreen from './pages/AlbumScreen'
import LoginScreen from './pages/LoginScreen'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/trilhas' exact component={AlbumsScreen} />
        <Route path='/trilhas/:id' component={AlbumScreen} />
        <Route path='/login' component={LoginScreen} />
      </Switch>
    </Router>
  )
}

export default App
