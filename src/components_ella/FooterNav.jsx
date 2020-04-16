import React, { Component } from "react";
import { Link } from "@reach/router";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCar,
  AiOutlineUser,
} from "react-icons/ai";
import "../css_ella/globalnav.css";

export default class GlobalNav extends Component {
  render() {
    let classesToAdd = "sticky-container-e";

    let currentLocation = this.props.location.pathname || "";
    // check our paths
    if (currentLocation === "/" || currentLocation === "/login") {
      classesToAdd += " hide-footer";
    }

    return (
      <nav className={classesToAdd}>
        <ul className="sticky-list-e">
          <li>
            <Link to="/all-cars">
              <AiOutlineHome size={33} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search-cars">
              <AiOutlineSearch size={32} />
              <span>Search</span>
            </Link>
          </li>

          <li>
            <Link to="/add-car">
              <AiOutlineCar size={32} />
              <span>Sell</span>
            </Link>
          </li>
          <li>
            <Link to="/my-profile">
              <AiOutlineUser size={32} />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
