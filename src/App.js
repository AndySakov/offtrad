import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.scss'
import NavBar from './components/NavBar'
import Home from './pages/Home'

// import NavBar from './components/NavBar'

const App = () => {

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

          <Route path='/' exact render={(props) => (
            <>
              <Home />
            </>
          )} />

          <Route path='/search' exact render={(props) => (
            <>

            </>
          )} />

          <Route path='/library' exact render={(props) => (
            <>

            </>
          )} />
        </div>
        <div className='musicControls'>music controls</div>
      </div>
    </Router>
  );
}

  export default App;
