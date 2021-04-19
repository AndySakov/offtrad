import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from "react-facebook-login";

class Login extends React.Component {


  constructor(props) {
    super();
  }

  login = (e) => {
    this.props.handleLogin(e)
    this.props.closer.close()
  }

  responseGoogle = (response, type) => {
    this.props.handleGoogle(response, type)
    this.props.closer.close()
  }

  responseFacebook = (response) => {
    this.props.handleFacebook(response)
    this.props.closer.close()
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className='modal-closer' onClick={() => this.props.closer.close()} ><FontAwesomeIcon icon="times" className="icon flip_this" size='2x' /></div>
        <div className="image logo">
            <h2>OFFTRAD!</h2>
        </div>
        <div className="msg">Log in to Offtrad.</div>
        <div className="extern-logins">
          <div className="form-group">
            <FacebookLogin
              appId="327714234606931"
              // autoLoad={true}
              fields="name,email,picture"
              callback={(response) => this.responseFacebook(response)}
              icon={<FontAwesomeIcon icon={faFacebook} className='btn-icon' size='1x' />}
            />
          </div>
          <div className="form-group">
            <GoogleLogin
              clientId="341174054179-a8f5q524hd7c41t8j4emj1lhr45evnk0.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}><FontAwesomeIcon icon={faGoogle} className='btn-icon' size='1x' />CONTINUE WITH GOOGLE</button>
              )}
              onSuccess={(response) => this.responseGoogle(response, "success")}
              onFailure={(response) => this.responseGoogle(response, "failure")}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
        <h6 className='hline'>----------or-----------</h6>
        <div className="msg">Continue with email.</div>
        <div className="my-content">
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