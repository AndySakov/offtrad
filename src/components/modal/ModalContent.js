import React from "react";
import "./Modal.scss";
import "./style.scss";
import Login from './Login'
import Register from './Register'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ModalContent extends React.Component {
  constructor({login, refr}) {
    super();
    this.state = {
      isLoginActive: login,
      closer: refr.current
    };
  }
  closer = <div className='modal-closer'><FontAwesomeIcon icon="times" className="icon flip_this" onClick={() => this.state.closer.close()} size='2x' /></div>

  componentDidMount() {
    //Add .right by default
    if(this.state.isLoginActive){
      this.rightSide.classList.add("right")
      this.container.classList.add("right")
    } else {
      this.rightSide.classList.add("left")
      this.container.classList.add("left")
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
              <Login containerRef={ref => (this.current = ref)} closer={this.closer} />
            )}
            {!isLoginActive && (
              <Register containerRef={ref => (this.current = ref)} closer={this.closer} />
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
