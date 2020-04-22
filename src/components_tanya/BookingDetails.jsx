import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import * as UTILS from "../utils";
import Axios from "axios";
import { Button } from "reactstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "@reach/router";
import "../css_tanya/booking_details.css";
import ConfirmBookingModal from "./ConfirmBookingModal";

export default class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: {},
      date: "",
      time: "",
      modal: false,
    };
    console.log(this.props);

    if (typeof this.props.bookingDate === "string") {
      let temp = this.props.bookingDate.split(" ");
      let dateStr = `${temp[0]}, ${temp[1]} ${temp[2]}, ${temp[3]}`;
      let timeStr = `${temp[4]}`;
      console.log("dateStr ", dateStr);
      console.log("timeStr ", timeStr);

      var timeArray = timeStr.split(":");

      this.state.date = dateStr;
      this.state.time = timeArray[0] + ":" + timeArray[1];
    }
  }

  componentDidMount() {
    Axios.get(`${UTILS.cars_url}/${this.props.id}`).then((res) => {
      console.log(res.data);
      this.setState({
        car: res.data[0],
      });
    });
  }

  closeModal = (e) => {
    this.setState({ modal: false });
  };

  openModal = (e) => {
    this.setState({ modal: true });
  };

  render() {
    return (
      <div className="main-content-t  booking-content-t">
        <div className="header-w-arrow header-t">
          <h1 className="arrow-t">
            {/* using  Link   from "@reach/router" (third party scripts): */}
            <Link to={`/book-test-drive/${this.props.id}`}>
              <IoIosArrowBack color="#d92546" />
            </Link>
          </h1>
          <h1>Booking Details</h1>
        </div>

        <div className="booking-container-t">
          <div className="car-titles-t  ">
            <h2>{this.state.car.year}</h2>
            <h2>{this.state.car.make}</h2>
            <h2>{this.state.car.model}</h2>
          </div>
          <h2 className="date-time-title-t">Selected date and time:</h2>
          <div className="date-time-container-t">
            <div>
              <div>Date: {this.state.date}</div>
            </div>
          </div>
          <div className="date-time-container-t">
            <div className=" time-container-t">
              <div>Time: {this.state.time}</div>
            </div>
          </div>
          {/* using reactstrap party scripts for button: */}
          <Button
            onClick={this.gotoBookingDetails}
            className=" red-btn-t  btn-next-t btn-cofirm-t"
            data-id={this.state.car.id}
            onClick={this.openModal}
            data-toggle="modal"
          >
            Confirm
          </Button>
        </div>

        {/* using reactstrap party scripts for modal: */}
        <ConfirmBookingModal
          closeModal={this.closeModal}
          modal={this.state.modal}
        />
      </div>
    );
  }
}
