import React, { useState, useRef } from 'react'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Artists from '../pages/Artists'
import SearchBar from '../components/SearchBar'
import MusicPlayer from '../components/MusicPlayer'
import CustomModal from '../components/modal/CustomModal'
import ModalContent from '../components/modal/ModalContent'

const DesktopView = () => {

  const [side, setSide] = useState(true)

  const modalRef = useRef();

  const modalTrigger = (side) => {
    setSide(side)
    modalRef.current.open()
  }

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
              <button className='btn btn-round btn-login rounded-pill' ></button>
              <button className='btn btn-round btn-login rounded-pill also' onClick={() => modalTrigger(true)} >LOG IN</button>
              <button className='btn btn-round btn-signup rounded-pill' onClick={() => modalTrigger(false)}>SIGN UP</button>

              <CustomModal ref={modalRef}><ModalContent login={side} refr={modalRef} /></CustomModal>
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
        <MusicPlayer />
      </div>
      </div>
    </Router>
  )
}

export default DesktopView
