import React, { Component } from "react";
import "../css/shared.css";
import "../css_ella/home.css";
import * as UTILS from "../utils";

export default class CarNotFound extends Component {
  render() {
    return (
      <div className="car-card-e">
        <img src={`${UTILS.assets_url}unknowncar.png`} alt="carimage" />
        <div className="card-text-container-e">
          <h3>Car Not Found</h3>
          <hr />
        </div>
      </div>
    );
  }
}
