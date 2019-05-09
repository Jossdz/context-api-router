import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'

export default () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/profile' component={Profile}/>
    </Switch>
  </BrowserRouter>
)