import React from "react";
import { Container } from "react-bootstrap";

function HOC(props) {
  return <Container style={{ marginTop: 10 }}>{props.children}</Container>;
}

export default HOC;
