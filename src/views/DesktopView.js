import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'

import { useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Artists from '../pages/Artists'

const DesktopView = () => {

  return (
    <Router>

      <Route path='/' exact > 
        <Redirect to='/home' />
      </Route>

      <div className='outerWrap'>
        <div className="App">
          <NavBar />

          <Switch>
            <Route path='/home' exact render={(props) => (
              <Home />
            )} />

            <Route path='/search' exact render={(props) => (
              <>

              </>
            )} />

            <Route path='/artists' exact render={(props) => (
              <Artists />
            )} />

            <Route path='/library' exact render={(props) => (
              <>

              </>
            )} />
          </Switch>
        </div>
        <div className='musicControls'>
         
        </div>
      </div>
    </Router>
  )
}

export default DesktopView
