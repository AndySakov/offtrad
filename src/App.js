import React from 'react'
import { isMobile } from 'react-device-detect'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.scss';

import DesktopView from './views/DesktopView'
import MobileView from './views/MobileView'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Bus from './components/utils/Bus';


const App = () => {
  library.add(fas, fab)
  window.flash = (error, message, type="success") => Bus.emit('flash', ({error, message, type}));
  return (
    <>
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
  )
}

export default App;
