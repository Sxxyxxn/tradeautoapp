import React, { Component } from "react";
import "../css/shared.css";
import * as UTILS from "../utils";
//** npm install utils **//
import Axios from "axios";
// ** npm install axios **//
import SingleCar from "./SingleCar";
import Comments from "./Comments";
import { IoIosArrowBack } from "react-icons/io";
//** npm install react-icons --save **//
import { Link } from "@reach/router";
import { navigate } from "@reach/router";
export default class ViewCarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  componentDidMount() {
    this.getData();
  }

  commentAdded = (e) => {
    this.getData();
  };

  getData = (e) => {
    console.log("reload data");
    Axios.get(UTILS.cars_url + "/" + this.props.id).then(
      (res) => {
        this.setState({ cars: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  };
  gotoBookTestDrive = (e) => {
    navigate(`/book-test-drive/${this.props.id}`);
  };

  render() {
    return (
      <div className="viewdeatils-container-e">
        <div className="header-w-arrow">
          <h1>
            <Link to="/all-cars">
              <IoIosArrowBack color="#d92546" />
            </Link>
          </h1>
          <h1>View Details</h1>
          <h1 style={{ visibility: "hidden" }}>
            <IoIosArrowBack />
          </h1>
        </div>
        {this.state.cars.map((car, i) => {
          return (
            <div key={Date.now()}>
              <SingleCar
                make={car.make}
                model={car.model}
                car_image={car.car_image}
                price={car.price}
                year={car.year}
                odometer={car.odometer}
                commentAdded={this.commentAdded}
              />

              <Comments refresh={this.getData} comments={car.comments} />
            </div>
          );
        })}
        <button onClick={this.gotoBookTestDrive} className="red-btn">
          Book a test drive
        </button>
      </div>
    );
  }
}
