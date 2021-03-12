import React from 'react'
import { isMobile } from 'react-device-detect'

import './styles/styles.scss';
import DesktopView from './views/DesktopView'
import MobileView from './views/MobileView'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


const App = () => {
  library.add(fas, fab)
  return (
    <>
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
  )
}

export default App;
