import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import { Button } from "reactstrap";
import { navigate } from "@reach/router";
// import EditButton from "./EditButton";
import "bootstrap/dist/css/bootstrap.css";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/my_profile.css";

import picture_women from "../images/women.png";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      modal: false,
      deleteId: "",
    };
  }

  gotoEditCar = (evt) => {
    var carid = evt.target.getAttribute("data-id");
    navigate(`/edit/${carid}`);
    console.log("go to edit");
  };

  MyCarDetails = (evt) => {
    var carid = evt.target.getAttribute("data-id");
    navigate(`/my-car-details/${carid}`);

    if (document.getElementById("upload-btn-t") != null)
      document.getElementById("upload-btn-t").style.display = "none";
  };

  refreshData = () => {
    Axios.get(`${UTILS.cars_url}`).then(
      (res) => {
        this.setState({ cars: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  };

  //we getting info from jason through server
  componentDidMount() {
    this.refreshData();
  }

  removeCar = (evt) => {
    var carid = evt.target.getAttribute("data-id");
    Axios.delete(`${UTILS.cars_url}/${carid}`).then((res) => {
      console.log(res.data);
      this.refreshData();
    });
  };

  closeModal = (e) => {
    const response = e.target.getAttribute("data-response");

    if (response == "true") {
      Axios.delete(`${UTILS.cars_url}/${this.state.deleteId}`).then((res) => {
        console.log(res.data);
        this.setState({ modal: false });
        this.refreshData();
      });
    } else {
      this.setState({ modal: false });
    }
  };

  openModal = (e) => {
    var carid = e.target.getAttribute("data-id");
    this.setState({ modal: true, deleteId: carid });
  };

  render() {
    return (
      <div className="main-content-t">
        <h1 className="header">My Profile</h1>
        <div className="user-content-t">
          <div className="user-details-container-t  main-redline-input">
            <div className=" user-image-wrapper-t">
              <img src={picture_women} alt="women-img" />
            </div>
            <div>
              <h1 className="user-title-red">Jane Doe</h1>
            </div>
            <div>
              <p className="email">janedoe12@gmail.com</p>
            </div>
            <div className="edit-profile-btn-container-t">
              <Button className="edit-profile-btn-t">Edit profile</Button>
            </div>
          </div>
        </div>
        <div className="selling-vehicles-container">
          <div className="row-t">
            <h2 className="selling-vehicles-title">Selling Vehicles:</h2>
          </div>
          {this.state.cars
            .filter((car) => car.seller_name == "user")
            .map((car) => {
              console.log(car.car_image);
              return (
                <div className="row-t">
                  <div className="column-t  small-image-car-wrapper">
                    <img
                      src={`http://localhost:4000/assets/${car.car_image}`}
                      alt="car-img"
                    />{" "}
                  </div>
                  <div className="column-t ">
                    <div className="row-t model-make-container-t">
                      <div>
                        {" "}
                        <h2 className="make-big-title-t">{car.make} </h2>
                        <h2 className="model-big-title-t">
                          {" "}
                          {car.model}{" "}
                        </h2>{" "}
                      </div>
                    </div>
                    <div className="row-t">
                      <div className="column-t ">
                        <button
                          className="view-details-btn-t"
                          data-id={car.id}
                          onClick={this.MyCarDetails}
                        >
                          View details >
                        </button>
                      </div>
                      <div className="column-t">
                        {" "}
                        <Button
                          data-id={car.id}
                          className="edit-btn-small-t "
                          onClick={this.gotoEditCar}
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="column-t">
                        <Button
                          data-id={car.id}
                          className="delete-btn-small-t  btn btn-primary"
                          onClick={this.openModal}
                          data-toggle="modal"
                          data-target="#centralModalSm"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <ConfirmDeleteModal
          closeModal={this.closeModal}
          modal={this.state.modal}
        />
      </div>
    );
  }
}
