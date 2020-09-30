import React, { useState } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";

import http from "../configs/http";
import { urls } from "../configs/urls";
import Alert from "./Alert";
import { getCouponList } from "../utils/Functions";

function CouponGenerator(props) {
  const [cName, setCouponName] = useState("");
  const [cPercent, setCouponPercentage] = useState(Number);
  const [duration, setCouponDuration] = useState("once");
  const [failedToSave, setFailedToSave] = useState(false);

  const onChange = (e, stateToSet) => {
    stateToSet(e.target.value);
  };

  const handleFormSubmition = (e) => {
    e.preventDefault();
    const couponInputs = {
      percentOff: cPercent,
      duration: duration,
      duration_in_months: 1,
      name: cName,
    };

    console.log(couponInputs);

    http
      .post(urls.createCouponCode, couponInputs)
      .then((res) => {
        getCouponList();
        return;
      })
      .catch((err) => {
        console.log(err);
        setFailedToSave(true);
        return;
      });
  };
  return (
    <Form method="POST" onSubmit={handleFormSubmition}>
      <Alert
        show={failedToSave}
        variant="danger"
        text="Failed to crete coupon"
      />
      <Row>
        <Col sm="12" lg="6">
          <Form.Group>
            <Form.Label htmlFor="cName">Coupon Name *</Form.Label>
            <FormControl
              name="cName"
              id="cName"
              value={cName}
              placeholder="Coupon Name *"
              onChange={(e) => {
                onChange(e, setCouponName);
              }}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="6">
          <Form.Group>
            <Form.Label htmlFor="cPercent">Percent Off *</Form.Label>
            <FormControl
              name="cPercent"
              id="cPercent"
              value={cPercent}
              type="number"
              placeholder="Percentage Off *"
              onChange={(e) => {
                onChange(e, setCouponPercentage);
              }}
              required
            />
          </Form.Group>
        </Col>
        <Col sm="12" lg="6">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control
              as="select"
              required
              onChange={(e) => {
                onChange(e, setCouponDuration);
              }}
            >
              <option value="">Select Duration *</option>
              <option value="once">Once</option>
              {/* <option value="repeating">Repeating</option> */}
              <option value="forever">Forever</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm="12" lg="12">
          <Form.Group>
            <Button type="submit" block>
              Generate Coupon
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default CouponGenerator;
