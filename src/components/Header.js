import React, { Component } from "react";
import "../css/Header.css";
import Logo from "../images/logo.png";

class Header extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__img">
          <img src={Logo} alt="" />
        </div>
        <div className="nav__title">
          <h1>Parcial - Práctica Integradora 2020 - UNPAZ</h1>
          <h2>Eduardo M. González</h2>
        </div>
      </div>
    );
  }
}

export default Header;
