import React, { Component } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { navigate } from "@reach/router";
import "../css_tanya/search.css";
import CarMakeDropdown from "./CarMakeDropdown";

export default class SearchCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      selectedMake: "Select Make",
    };
  }

  gotoFilterdCars = (evt) => {
    evt.preventDefault();

    var make = document.querySelector("#make").value;
    var sortHigh = document.querySelector("#sorthigh").checked;
    var sortLow = document.querySelector("#sortlow").unchecked;

    navigate(`/filtered-cars/`, {
      state: { make: make, sortHigh: sortHigh, sortLow: sortLow },
    });
  };

  componentDidMount() {
    var sortHigh = document.querySelector("#sorthigh");
    var sortLow = document.querySelector("#sortlow");
    sortHigh.addEventListener("change", function () {
      if (sortLow.checked) {
        sortLow.checked = false;
      }
      if ((sortLow.checked == false) & (sortHigh.checked == false)) {
        sortHigh.checked = true;
      }
    });
    sortLow.addEventListener("change", function () {
      if (sortHigh.checked) {
        sortHigh.checked = false;
      }
      if ((sortLow.checked == false) & (sortHigh.checked == false)) {
        sortLow.checked = true;
      }
    });
  }

  selectMake = (evt) => {
    var make = evt.target.getAttribute("data-make");
    if (make == null) return;
    this.setState({ selectedMake: make });
    console.log(make);
  };

  render() {
    return (
      <div className="main-content-t">
        <h1 className="header">Car Search</h1>
        <div className="card form-container-t">
          <div className="card-body   pt-0">
            <form onSubmit={this.gotoFilterdCars}>
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
                  className="check-box-input-t"
                  id="sorthigh"
                  type="checkbox"
                />
                <label>Sort high to low</label>
              </div>
              <div className=" main-redline-input md-form">
                <input
                  className="check-box-input-t"
                  id="sortlow"
                  type="checkbox"
                  checked
                />{" "}
                <label>Sort low to high</label>
              </div>

              <Button className=" search-btn-t red-btn-t" type="submit">
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
