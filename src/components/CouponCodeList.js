import React from "react";
import { Card, Button, ButtonGroup, Table } from "react-bootstrap";
import PropTypes from "prop-types";

function CouponCodeList(props) {
  return (
    <Card style={{ marginTop: 10 }} border="primary">
      <Card.Header
        as="h5"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Coupon Codes</div>
        {/* <div>
          <Button>My Coupon Codes</Button>
        </div> */}
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Coupon Codes</th>
              <th>Generated By</th>
              <th>Generated Date</th>
              <th>Edit | Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.data &&
              props.data.map((data, index) => (
                <tr key={index.toString()}>
                  <td>{index + 1}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <ButtonGroup>
                      <Button variant="primary">Edit</Button>
                      <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            {!props.data && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

CouponCodeList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default React.memo(CouponCodeList);
