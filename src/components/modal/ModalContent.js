import React from "react";
import Login from './Login'
import Register from './Register'


class ModalContent extends React.Component {
  constructor({login, refr}) {
    super();
    this.state = {
      isLoginActive: login,
      closer: refr.current
    };
  }

  componentDidMount() {
    //Add .right by default
    const addClasses = (name) => {
      this.rightSide.classList.add(name)
      this.container.classList.add(name)
    }

    if(this.state.isLoginActive){
      addClasses("right")
    } else {
      addClasses("left")
    }
  }

  changeState() {
    const { isLoginActive } = this.state;

    if (isLoginActive) {
      this.rightSide.classList.remove("right");
      this.container.classList.remove("right");
      this.rightSide.classList.add("left");
      this.container.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.container.classList.remove("left");
      this.rightSide.classList.add("right");
      this.container.classList.add("right");
    }
    this.setState(prevState => ({ isLoginActive: !prevState.isLoginActive }));
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Sign Up" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    return (
      <div className="modal">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>

            {isLoginActive && (
              <Login containerRef={ref => (this.current = ref)} closer={this.state.closer} handleLogin={(e) => this.props.handleLogin(e)} />
            )}
            {!isLoginActive && (
              <Register containerRef={ref => (this.current = ref)} closer={this.state.closer} />
            )}

          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="header">{props.current === "Login" ? "Have an account?" : "Don't have an account?"}</div>
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default ModalContent;
