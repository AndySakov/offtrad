import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends React.Component {
  constructor(props) {
    super();
  }

  submitForm = (e) => {
    const pass = document.querySelector("#pass").value
    const cf_pass = document.querySelector("#cf_pass").value
    if(pass === cf_pass) {
      this.props.handleSignup(e)
      this.props.changeUp()
    } else {
      window.flash('Signup Failed!', 'Password and Confirm Password not equal!', 'danger')
    }
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className='modal-closer' onClick={() => this.props.closer.close()} ><FontAwesomeIcon icon="times" className="icon flip_this" size='2x' /></div>
        <div className="image logo">
            <h2>OFFTRAD!</h2>
          </div>
        <div className="msg">Nice to meet you!</div>

        <div className="my-content">
          <form id="signup" className="form" action="" method="POST" onSubmit={(e) => this.submitForm(e)}>
            <div className="form-group">
              <input id="user" type="text" name="user" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input id="email2" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input id="full" type="text" name="name" placeholder="Fullname" required />
            </div>
            <div className="form-group">
              <input id='pass' type="password" name="pass" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input id='cf_pass' type="password" name="cf_pass" placeholder="Confirm Password" required />
            </div>

            <div className="footer">
              <button type="submit" className="btn-modal">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register
