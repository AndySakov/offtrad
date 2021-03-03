import React from 'react'

import './App.scss'
import Main from './components/Main'
import NavBar from './components/NavBar'

// import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='outerWrap'>
      <div className="App">
        <NavBar />
        <Main />
      </div>
      <div className='musicControls'>music controls</div>
    </div>
  );
}

  export default App;
