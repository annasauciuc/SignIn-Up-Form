import React, { Component } from "react";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Overlay from "../Overlay/Overlay";
import "./Layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signUp = () => {
     let container = document.getElementById("container");
    console.log("signUP");
    console.log("container :", container);
    container.classList.add("right-panel-active");
  };
  signIn = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
    console.log("signIn");
  };
  render() {
    const { signIn, signUp } = this.props;
    console.log("signIn", signIn);
    return (
      <section className="container" id="container">
        <SignIn  />

        <SignUp  />
        <Overlay signIn={this.signIn} signUp={this.signUp} />
      </section>
    );
  }
}

export default Layout;
