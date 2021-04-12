import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import NavBar from '../components/SideBar'
import Home from '../pages/Home'

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Artists from '../pages/Artists'
import SearchBar from '../components/SearchBar'
import MusicPlayer from '../components/MusicPlayer'
import * as api from '../api'
import { login } from '../redux/ducks/data';
import { Flash } from '../components/Flash';
import DemoUserComps from '../components/DemoUserComps';

const DesktopView = () => {

  const [side, setSide] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const modalRef = useRef();

  const dispatch = useDispatch()

  const modalTrigger = (side) => {
    setSide(side)
    modalRef.current.open()
  }

  const handleLogin = (e, formId) => {
    let res = false
    e.preventDefault()
    const email = document.querySelector("#email").value
    const pass = document.querySelector("#pass").value
    const userData = api.login(email, pass)
    userData.then((res) => {
      const data = res.status ? res.data : {id: null}
      res = data.id == null ? false : true
      res ? window.flash('Login Success', 'Welcome Back!') : window.flash('Login Failed', 'Email or Password is wrong!', 'danger')
      data.id == null ? console.log("No Login!") : dispatch(login(data))
    })
    setIsLoggedIn(res)
  }

  return (
    <Router>

      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>

      <div className='outerWrap'>
        <div className='App'>
          <NavBar />

          <div className='main'>
              <nav className='upperNav'>
                {!isLoggedIn && <DemoUserComps side={side} handleLogin={(e) => handleLogin(e)} modalTrigger={ (side) => modalTrigger(side) }  modalRef={modalRef} />}
                <SearchBar />
              </nav>
              <div className='mainContent'>
                <Flash />

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
