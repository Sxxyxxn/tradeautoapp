import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as UTILS from "../utils";
import Axios from "axios";

import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "@reach/router";
import "../css_tanya/booking_details.css";

export default class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
    };
  }

  componentDidMount() {
    Axios.get(`${UTILS.cars_url}/${this.props.id}`).then((res) => {
      console.log(res.data);
      this.setState({
        car: res.data[0],
      });
    });
  }
  // gotoBookingDetails = (e) => {
  //   navigate(`/booking-details/${this.props.id}`);
  // };

  render() {
    return (
      <div className="main-content-t  booking-content-t">
        <div className="header-w-arrow header-t">
          <h1 className="arrow-t">
            <Link to={`/book-test-drive/${this.props.id}`}>
              <IoIosArrowBack color="#d92546" />
            </Link>
          </h1>
          <h1>Booking Details</h1>
          {/* <h1 style={{ visibility: "hidden" }}>
            <IoIosArrowBack />
          </h1> */}
        </div>
        {/* <h1 className="header">Book A Test Drive </h1> */}
        <div className="booking-container-t">
          <div className="car-titles-t  ">
            <h2>{this.state.car.year}</h2>
            <h2>{this.state.car.make}</h2>
            <h2>{this.state.car.model}</h2>
          </div>
          <h2 className="date-time-title-t">Selected date and time:</h2>
          <div className="date-time-container-t">
            <div>
              {" "}
              <span>Date:</span>
              {/* <div>Date:{this.props.selected}</div> */}
            </div>
          </div>
          <div className="date-time-container-t">
            <div className=" time-container-t">
              <span>Time:</span>
              {/* <div>Date:{this.props.}</div> */}
            </div>
          </div>

          <Button
            onClick={this.gotoBookingDetails}
            className=" red-btn-t  btn-next-t btn-cofirm-t"
            type="submit"
          >
            Confirm
          </Button>
        </div>
      </div>
    );
  }
}
