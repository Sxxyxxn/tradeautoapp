import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../css/shared.css";
import "../css_tanya/style.css";
import "../css_tanya/delete_modal.css";

export default class ConfirmDeleteModal extends Component {
  render() {
    const closeModal = this.props.closeModal;
    const modal = this.props.modal;
    return (
      <Modal className="modal-container-t" isOpen={modal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}></ModalHeader>
        <ModalBody>Are you sure you want to delete this ad?</ModalBody>
        <ModalFooter>
          <Button
            data-response={true}
            className="modal-red-btn-t"
            onClick={closeModal}
          >
            Delete
          </Button>{" "}
          <Button
            data-response={false}
            className="modal-cancel-btn-t"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
