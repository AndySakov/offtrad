import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'

import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Artists from '../pages/Artists'

const DesktopView = () => {

  const pages = {
    HOME: 'home',
    SEARCH: 'search',
    LIBS: 'libs'
  }

  const [page, setPage] = useState(pages.HOME)

  return (
    <Router>
      <div className='outerWrap'>
        <div className="App">
          <NavBar page={page} setter={setPage}/>

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
