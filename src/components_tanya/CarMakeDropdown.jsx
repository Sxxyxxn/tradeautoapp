import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export default class CarMakeDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UncontrolledDropdown onClick={this.props.selectMake}>
        <DropdownToggle caret>{this.props.selectedMake}</DropdownToggle>
        <DropdownMenu className="select-t">
          <DropdownItem data-make="Audi">Audi</DropdownItem>
          <DropdownItem data-make="BMW">BMW</DropdownItem>
          <DropdownItem data-make="Chevrolet">Chevrolet</DropdownItem>
          <DropdownItem data-make="Citroen">Citroen</DropdownItem>
          <DropdownItem data-make="Daihatsu">Daihatsu</DropdownItem>
          <DropdownItem data-make="Fiat">Fiat</DropdownItem>
          <DropdownItem data-make="Ford">Ford</DropdownItem>
          <DropdownItem data-make="Honda">Honda</DropdownItem>
          <DropdownItem data-make="Jeep">Jeep</DropdownItem>
          <DropdownItem data-make="Land Rover">Land Rover</DropdownItem>
          <DropdownItem data-make="Lexus">Lexus</DropdownItem>
          <DropdownItem data-make="Kia">Kia</DropdownItem>
          <DropdownItem data-make="Mazda">Mazda</DropdownItem>
          <DropdownItem data-make="Mercedes">Mercedes</DropdownItem>
          <DropdownItem data-make="Mini">Mini</DropdownItem>
          <DropdownItem data-make="Nissan">Nissan</DropdownItem>
          <DropdownItem data-make="Renault">Renault</DropdownItem>
          <DropdownItem data-make="Subaru">Subaru</DropdownItem>
          <DropdownItem data-make="Suzuki">Suzuki</DropdownItem>
          <DropdownItem data-make="Mazda">Mazda</DropdownItem>
          <DropdownItem data-make="Toyota">Toyota</DropdownItem>
          <DropdownItem data-make="Volkswagen">Volkswagen</DropdownItem>
          <DropdownItem data-make="Volvo">Volvo</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
