import React from 'react'

import CustomModal from '../components/modal/CustomModal'
import ModalContent from '../components/modal/ModalContent'

const DemoUserComps = ({ modalTrigger, modalRef, side, handleLogin, handleSignup, handleGoogle, handleFacebook }) => {
  return (
    <>
      <button className='btn btn-round btn-login rounded-pill' ></button>
      <button className='btn btn-round btn-login rounded-pill also' onClick={() => modalTrigger(true)} >LOG IN</button>
      <button className='btn btn-round btn-signup rounded-pill' onClick={() => modalTrigger(false)}>SIGN UP</button>

      <CustomModal ref={modalRef}><ModalContent login={side} handleLogin={(e) => handleLogin(e)} handleGoogle={(response, type) => handleGoogle(response, type)} handleFacebook={(response) => handleFacebook(response)} handleSignup={(e) => handleSignup(e)} refr={modalRef} /></CustomModal>
    </>
  )
}

export default DemoUserComps
