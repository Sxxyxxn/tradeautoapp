import React, { Component } from "react";
import "../css_ella/splash.css";
import { navigate } from "@reach/router";

export default class SplashPage extends Component {
  logIn = (e) => {
    navigate(`/login`);
  };

  render() {
    return (
      <div className="splash-e" onClick={this.logIn}>
        <div className="logo-container-e">
          <h1>TradeAuto</h1>
          <h2>Buy&Sell</h2>
        </div>
      </div>
    );
  }
}
