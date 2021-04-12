import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends React.Component {
  constructor(props) {
    super();
  }

  submitForm = () => {
    // const pass = document.querySelector("#pass")
    // const cf_pass = document.querySelector("#cf_pass")
    // const form = document.querySelector("form")
    // // cf_pass.nodeValue == pass.nodeValue ? form.submit : console.log("")
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className='modal-closer' onClick={() => this.props.closer.close()} ><FontAwesomeIcon icon="times" className="icon flip_this" size='2x' /></div>
        <div className="msg">Nice to meet you!</div>
        <div className="content">
          <div className="image logo">
            <h2>OFFTRAD!</h2>
          </div>
          <form className="form" action="" method="POST" onSubmit={this.submitForm}>
            <div className="form-group">
              <input type="text" name="user" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="name" placeholder="Fullname" required />
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
