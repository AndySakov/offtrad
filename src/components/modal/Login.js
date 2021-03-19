import React from "react";



class Login extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        {this.props.closer}
        <div className="msg">Welcome Back!</div>
        <div className="content">
          <div className="image logo">
            <h2>OFFTRAD!</h2>
          </div>
          <form className="form" action="" method="POST" >
            <div className="form-group">
              <input type="text" name="username" placeholder='Username'/>
            </div>
            <div className="form-group">
              <input type="password" name="password" placeholder='Password' />
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