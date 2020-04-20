import React, { Component } from "react";
import { Button } from "reactstrap";
import Axios from "axios";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import "../css_tanya/addcar_form.css";
import default_image from "../images/default_img.png";
import CarMakeDropdown from "./CarMakeDropdown";
import YearDropdown from "./YearDropdown";

export default class AddCarAd extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      id: Date.now(),
      selectedMake: "Select Make",
      selectedYear: "Select Year",
      previewURL: "",
      filename: "",
      price: "",
      model: "",
      odometer: "",
    };
  }

  selectMake = (evt) => {
    var make = evt.target.getAttribute("data-make");
    if (make == null) return;
    this.setState({ selectedMake: make });
  };

  selectYear = (evt) => {
    var year = evt.target.getAttribute("data-year");
    if (year == null) return;
    this.setState({ selectedYear: year });
  };

  addCar = (e) => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);
    // forms with images look a bit different - we need to add this line.
    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    console.log(">>> FORMDATA ", formData);
    Axios.post(UTILS.add_car, formData, settings)
      .then((res) => {
        console.log(res);
        navigate(`/my-car-details/${res.data.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onFileUpdate = (e) => {
    if (e.target.files.length == 0) return;
    console.log(e.target.files[0].name);
    this.setState({
      filename: e.target.files[0].name,
      //create address for img:
      previewURL: window.URL.createObjectURL(e.target.files[0]),
    });
  };

  changePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  changeModel = (e) => {
    this.setState({ model: e.target.value });
  };

  separateNumber = () => {
    var numberToCovert = document.querySelector(".odometer-input-t");
    var val = numberToCovert.value.replace(/,/g, "");

    var output = val.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    numberToCovert.value = output;
  };

  render() {
    return (
      <div className="main-content-t">
        <h1 className="header">Sell Your Car</h1>

        <h2 className="vehicle-details-title">Vehicle details</h2>

        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form onSubmit={this.addCar} ref={this.formRef}>
              <div className=" main-redline-input container-t year-container-t  ">
                <input
                  id="year"
                  type="hidden"
                  value={this.state.selectedYear}
                  name="year"
                  placeholder="Year"
                />
                <YearDropdown
                  selectedYear={this.state.selectedYear}
                  selectYear={this.selectYear}
                />
              </div>

              <div className=" main-redline-input container-t">
                <input
                  id="make"
                  type="hidden"
                  value={this.state.selectedMake}
                  name="make"
                  placeholder="Make"
                />
                <CarMakeDropdown
                  selectMake={this.selectMake}
                  selectedMake={this.state.selectedMake}
                />
              </div>
              <div className=" main-redline-input md-form">
                <input
                  id="model"
                  type="text"
                  name="model"
                  placeholder="Model"
                  onChange={this.changeModel}
                />
              </div>
              <div className="main-redline-input md-form">
                <input
                  className="odometer-input-t"
                  id="odometer"
                  name="odometer"
                  placeholder="Odometer"
                  onChange={this.separateNumber}
                />
              </div>
              <div className=" main-redline-input md-form">
                <input
                  className="price-input-t"
                  id="price"
                  name="price"
                  placeholder="Price"
                  onChange={this.changePrice}
                />
              </div>
              <div className="  md-form">
                <input
                  id="seller_name"
                  type="hidden"
                  name="seller_name"
                  value="user"
                />
              </div>
              <input id="id" type="hidden" name="id" value={this.state.id} />
              <div className=" main-redline-input md-form image-upload-container-t ">
                <label
                  style={{ fontSize: "1.5rem", color: "gray" }}
                  htmlFor="files"
                >
                  <div className="caption-and-img-container-t">
                    <div className="select-image-caption-t">Select Image:</div>

                    {/* if first statement is true it will render second part */}
                    {this.state.filename == "" && (
                      <div className="default-image-wrapper-t">
                        <img src={default_image} />
                      </div>
                    )}
                    {/* if first statement is false it will not render second part */}
                    {this.state.filename != "" && (
                      <div className="image-for-input-wrapper-t">
                        <img src={this.state.previewURL} alt="image" />
                      </div>
                    )}
                  </div>
                </label>

                <input
                  className="hidden-input-t"
                  id="files"
                  style={{ visibility: "hidden" }}
                  name="car_image"
                  type="file"
                  onChange={this.onFileUpdate}
                ></input>
              </div>
              <Button
                disabled={
                  this.state.filename == "" ||
                  this.state.selectedMake == "Select Make" ||
                  this.state.selectedYear == "Select Year" ||
                  this.state.price == ""
                }
                className=" red-btn-t  btn-next-t"
                type="submit"
              >
                Next
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
