import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function ConfirmDialog(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={props.onCancel}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onCancel} variant="primary">
          Cancel
        </Button>
        <Button onClick={props.onConfirmDelete} variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onConfirmDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default ConfirmDialog;
