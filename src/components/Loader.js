import React from "react";
import { Spinner } from "react-bootstrap";
import ProptTypes from "prop-types";

function Loader(props) {
  return (
    props.show && (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 100,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" role="status" style={{ color: "#fff" }}>
            <span className="sr-only">Loading...</span>
          </Spinner>
          <h2 style={{ marginLeft: 10, color: "#fff" }}>Loading...</h2>
        </div>
      </div>
    )
  );
}

Loader.propTypes = {
  show: ProptTypes.bool.isRequired,
};

export default React.memo(Loader);
