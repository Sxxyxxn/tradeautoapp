import React, { Component } from "react";
import "../css/shared.css";
import "../css_ella/home.css";

export default class SingleCarAsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="car-card">
        <img src={this.props.car_image} alt="carimage" />
        <div className="card-text-container">
          <h3>
            {this.props.make} {this.props.model}
          </h3>
          <hr />
          <div className="odometer-year-container">
            <span>Odometer</span> <span>Year</span>
            <span>{this.props.odometer}km</span>
            <span>{this.props.year}</span>
            {/* <p>
              Odometer <br /> {this.props.odometer}km
            </p>
            <p>
              Year <br /> {this.props.year}
            </p> */}
          </div>
          <p>${this.props.price}</p>
          <button className="view-details-btn">View details</button>
        </div>
      </div>
    );
  }
}