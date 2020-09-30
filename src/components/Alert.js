import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

function AlertComponent(props) {
  const [showAlert, setAlertState] = useState(props.show);

  useEffect(() => {
    if (props.show) setAlertState(props.show);
  }, [props.show]);

  return (
    showAlert && (
      <Alert
        variant={props.variant}
        onClose={() => {
          setAlertState(false);
        }}
        dismissible
      >
        <p>{props.text}</p>
      </Alert>
    )
  );
}

AlertComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default React.memo(AlertComponent);
