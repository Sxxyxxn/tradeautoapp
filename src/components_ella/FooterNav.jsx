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
    var pathname = this.props.location.pathname;
    console.log(this.props);
    return (
      <nav className={classesToAdd}>
        <ul className="sticky-list-e">
          <li>
            <div className={pathname == "/all-cars" ? "footer-item-red" : ""}>
              <Link to="/all-cars">
                <AiOutlineHome color="#d92546" size={33} />
                <span>Home</span>
              </Link>
            </div>
          </li>
          <li>
            <div
              className={pathname == "/search-cars" ? "footer-item-red" : ""}
            >
              <Link to="/search-cars">
                <AiOutlineSearch size={32} />
                <span>Search</span>
              </Link>
            </div>
          </li>

          <li>
            <div className={pathname == "/add-car" ? "footer-item-red" : ""}>
              <Link to="/add-car">
                <AiOutlineCar size={32} />
                <span>Sell</span>
              </Link>
            </div>
          </li>
          <li>
            <div className={pathname == "/my-profile" ? "footer-item-red" : ""}>
              <Link to="/my-profile">
                <AiOutlineUser size={32} />
                <span>Profile</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
