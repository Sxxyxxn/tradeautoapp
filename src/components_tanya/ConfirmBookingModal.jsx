import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class ConfirmBookingModal extends Component {
  render() {
    const closeModal = this.props.closeModal;
    const modal = this.props.modal;
    return (
      <Modal className="modal-container-t" isOpen={modal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}></ModalHeader>
        <ModalBody>Your booking is confirmed</ModalBody>
        <ModalFooter>
          <Button
            data-response={false}
            className="modal-red-btn-t"
            onClick={closeModal}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
