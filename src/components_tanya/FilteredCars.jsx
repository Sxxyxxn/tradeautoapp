import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import SingleCarAsCard from "../components_ella/SingleCarAsCard";
import CarNotFound from "../components_tanya/CarNotFound";
import "../css_ella/home.css";
import { Link } from "@reach/router";
import { IoIosArrowBack } from "react-icons/io";

export default class FilteredCars extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }

  // componentDidMount() {
  //   Axios.get(UTILS.cars_url).then(
  //     (res) => {
  //       if (res.data.result === false) {
  //         this.setState({ result: false });
  //       } else {
  //         this.setState({ cars: res.data, result: true });
  //       }
  //     },
  //     (error) => {
  //       console.log("error = ", error);
  //     }
  //   );
  // }

  checkForSearchTerm = (arr) => {
    let count = 0;
    arr.forEach((item) => {
      if (item.make === this.props.location.state.make) {
        count++;
      }
    });

    return count;
  };

  componentDidMount() {
    Axios.get(UTILS.cars_url).then(
      (res) => {
        if (res.data.result === false) {
          this.setState({ result: false });
        } else {
          let quickcount = this.checkForSearchTerm(res.data);

          if (quickcount > 0) {
            this.setState({ cars: res.data, result: true });
          } else {
            this.setState({ result: false });
          }
        }
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  checkForSearchTerm = (arr) => {
    let count = 0;
    arr.forEach((item) => {
      if (item.make === this.props.location.state.make) {
        count++;
      }
    });

    return count;
  };

  render() {
    var make = this.props.location.state.make;
    var sortHigh = this.props.location.state.sortHigh;
    // var sortLow = this.props.location.state.sortlow;
    // console.log(make);
    // console.log(this.state.cars.length);
    return (
      <div className="main-content-t">
        <div className="header-w-arrow">
          <h1>
            <Link to="/search-cars">
              <IoIosArrowBack color="#d92546" />
            </Link>
          </h1>
          <h1>Search Results</h1>
          <h1 style={{ visibility: "hidden" }}>
            <IoIosArrowBack />
          </h1>
        </div>
        {this.state.result === false ? (
          <p className="no-results-t">Sorry. No results found</p>
        ) : // <p></p>
        null}
        {this.state.result === false ? <CarNotFound /> : null}

        {this.state.cars
          .filter((car) => car.make === make)
          .sort((car1, car2) =>
            sortHigh === true
              ? car2.price - car1.price
              : car1.price - car2.price
          )
          .map((car, i) => {
            return (
              <SingleCarAsCard
                key={i}
                car_image={car.car_image}
                make={car.make}
                model={car.model}
                odometer={car.odometer}
                year={car.year}
                price={car.price}
                uid={car._id}
              />
            );
          })}
      </div>
    );
  }
}
