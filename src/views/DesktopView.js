import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import SideBar from '../components/SideBar'
import Home from '../pages/Home'

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Artists from '../pages/Artists'
import SearchBar from '../components/SearchBar'
import MusicPlayer from '../components/MusicPlayer'
import * as api from '../api'
import { login } from '../redux/ducks/data';
import { Flash } from '../components/Flash';
import DemoUserComps from '../components/DemoUserComps';
import store from '../redux/store'

const DesktopView = () => {

  const [side, setSide] = useState(true)

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const unsubscribe = store.subscribe(() => setIsLoggedIn(store.getState().isLoggedIn))
  unsubscribe()

  const modalRef = useRef();

  const dispatch = useDispatch()

  const modalTrigger = (side) => {
    setSide(side)
    modalRef.current.open()
  }

  const handleLogin = (e) => {
    let resr = false
    e.preventDefault()
    const email = document.querySelector("#email").value
    const pass = document.querySelector("#pass").value
    const userData = api.login(email, pass)
    userData.then((res) => {
      const data = res.status ? res.data : {id: null}
      resr = data.id == null ? false : true
      resr ? window.flash('Login Success', 'Welcome Back!') : window.flash('Login Failed', 'Email or Password is wrong!', 'danger')
      data.id == null ? console.log("No Login!") : dispatch(login(data))
    })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    const user = document.querySelector("#user").value
    const email = document.querySelector("#email2").value
    const full = document.querySelector("#full").value
    const pass = document.querySelector("#pass").value
    const userData = api.signup(user, email, full, pass)

    userData.then((res) => {
      res.status ? window.flash('Signup Successful!', 'You can now login with your credentials') : window.flash('Signup Failed!', 'Unknown Error', 'danger')
    })

  }

  return (
    <Router>

      <Redirect path='/' to='/home' />

      <div className='outerWrap'>
        <div className='App'>
          <SideBar />

          <div className='main'>
              <nav className='upperNav'>
                {!isLoggedIn && <DemoUserComps side={side} handleLogin={(e) => handleLogin(e)} handleSignup={(e) => handleSignup(e)} modalTrigger={ (side) => modalTrigger(side) }  modalRef={modalRef} />}
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
