import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Artists from '../pages/Artists'
import SearchBar from '../components/SearchBar'

const DesktopView = () => {

  return (
    <Router>

      <Route path='/' exact >
        <Redirect to='/home' />
      </Route>

      <div className='outerWrap'>
        <div className="App">
          <NavBar />

          <div className='main'>
            <div className='upperNav'>
              <button className='btn btn-round btn-login rounded-pill'>LOG IN</button>
              <button className='btn btn-round btn-signup rounded-pill'>SIGN UP</button>
              <SearchBar />
            </div>
            <div className='mainContent'>
              <Switch>

                <Route path='/home' exact render={(props) => (
                  <Home />
                )} />

                <Route path='/discover' exact render={(props) => (
                  <></>
                )} />

                <Route path='/artists' exact render={(props) => (
                  <Artists />
                )} />

                <Route path='/library' exact render={(props) => (
                  <></>
                )} />

              </Switch>
            </div>
    </div>
        </div>
        <div className='musicControls'>

        </div>
      </div>
    </Router>
  )
}

export default DesktopView
