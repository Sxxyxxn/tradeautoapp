import React, { Component } from "react";
import "../css/shared.css";
import "../css_ella/home.css";
import "../css_tanya/notfound.css";
import * as UTILS from "../utils";

export default class CarNotFound extends Component {
  render() {
    return (
      <div className="main-content-t not-found-container-t">
        <div>
          <div className=" notfound-row-t notfound-img-container-t">
            {" "}
            <img src={`${UTILS.assets_url}notfound.png`} alt="notfound-image" />
          </div>
          <div className="notfound-row-t ">
            {" "}
            <h1>No results found</h1>
          </div>
        </div>
      </div>
    );
  }
}
