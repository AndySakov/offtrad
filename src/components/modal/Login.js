import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends React.Component {

  constructor(props) {
    super();
  }

  login = (e) => {
    this.props.handleLogin(e, "login")
    this.props.closer.close()
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className='modal-closer' onClick={() => this.props.closer.close()} ><FontAwesomeIcon icon="times" className="icon flip_this" size='2x' /></div>
        <div className="msg">Welcome Back!</div>
        <div className="content">
          <div className="image logo">
            <h2>OFFTRAD!</h2>
          </div>
          <form className="form" id="login" method="POST" onSubmit={(e) => this.login(e)}>
            <div className="form-group">
              <input type="email" name="email" placeholder='Email' id = "email" required />
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder='Password' id = "pass" required />
            </div>

            <div className="footer">
              <button type="submit" className="btn-modal">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login