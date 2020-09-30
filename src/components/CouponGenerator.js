import React, { useState } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";

import http from "../configs/http";
import { urls } from "../configs/urls";

function CouponGenerator() {
  const [cName, setCouponName] = useState("");
  const [cId, setCouponId] = useState("" | Number);
  const [cPercent, setCouponPercentage] = useState(Number);

  const onChange = (e, stateToSet) => {
    stateToSet(e.target.value);
  };

  const handleFormSubmition = (e) => {
    e.preventDefault();
    const couponInputs = {
      id: cId,
      percentOff: cPercent,
      duration: "once",
      duration_in_months: 1,
    };

    console.log(couponInputs);

    http
      .post(urls.createCouponCode, couponInputs)
      .then((res) => {
        console.log(res);
        return;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };
  return (
    <Form method="POST" onSubmit={handleFormSubmition}>
      <Row>
        <Col sm="12" lg="3">
          <Form.Label htmlFor="cName">Coupon Name *</Form.Label>
          <FormControl
            name="cName"
            id="cName"
            value={cName}
            placeholder="Coupon Name *"
            onChange={(e) => {
              onChange(e, setCouponName);
            }}
          />
        </Col>
        <Col sm="12" lg="3">
          <Form.Label htmlFor="cId">
            Coupon ID <span>Optional</span>
          </Form.Label>
          <FormControl
            name="cId"
            id="cId"
            value={cId}
            placeholder="Coupon ID Optional"
            onChange={(e) => {
              onChange(e, setCouponId);
            }}
          />
        </Col>
        <Col sm="12" lg="3">
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
          />
        </Col>
        <Col sm="12" lg="3">
          <Button type="submit" block>
            Generate Coupon
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default CouponGenerator;
