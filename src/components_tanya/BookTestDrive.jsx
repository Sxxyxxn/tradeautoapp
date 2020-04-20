import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as UTILS from "../utils";
import Axios from "axios";
import "../css_tanya/book.css";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "@reach/router";

export default class BookTestDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingDate: new Date(),
      car: {},
    };
  }

  handleChange = (date) => {
    this.setState({
      bookingDate: date,
    });
  };

  componentDidMount() {
    Axios.get(`${UTILS.cars_url}/${this.props.id}`).then((res) => {
      console.log(res.data);
      this.setState({
        car: res.data[0],
      });
    });
  }
  gotoBookingDetails = (e) => {
    navigate(`/booking-details/${this.props.id}/${this.state.bookingDate}`);
  };

  addMonths = (date, months) => {
    // from SO, mostly...
    var d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    return date;
  };

  render() {
    return (
      <div className="main-content-t  booking-content-t">
        <div className="header-w-arrow header-t">
          <h1 className="arrow-t">
            <Link to="/cars/{this.props.id}">
              <IoIosArrowBack color="#d92546" />
            </Link>
          </h1>
          <h1>Book A Test Drive</h1>
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
          <h2 className="date-time-title-t">Select date and time:</h2>
          <div className="calendar-container-t">
            <DatePicker
              selected={this.state.bookingDate}
              onChange={this.handleChange}
              showTimeSelect
              dateFormat="Pp"
              minDate={new Date()}
              maxDate={this.addMonths(new Date(), 3)}
              minTime={new Date().setHours(8)}
              maxTime={new Date().setHours(17)}
              placeholderText="Select a booking date"
            />
          </div>
          {/* <p> The date you've selected is: {this.onChange.date}</p> */}
          <Button
            onClick={this.gotoBookingDetails}
            className=" red-btn-t  btn-next-t btn-book-t"
            type="submit"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}
