import React, { useEffect, useState } from "react";
import { Card, Button, ButtonGroup, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import http from "../configs/http";
import { urls } from "../configs/urls";
import ConfirmDialog from "./ConfirmDialog";
import { getCouponList } from "../utils/Functions";

let couponId = ""; //it will store coupon id for edit or delete case

function CouponCodeList() {
  const [showConfirm, setConfirmState] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.couponList);

  //fetching the all coupon list
  useEffect(() => {
    getCouponList();
  }, []);

  return (
    <>
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
                <th>Duration</th>
                <th>Created At</th>
                <th>Edit | Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((data, index) => (
                  <tr key={index.toString()}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.duration}</td>
                    <td>{new Date(Date(data.created)).toUTCString()}</td>
                    <td>
                      <ButtonGroup>
                        <Button
                          variant="primary"
                          onClick={() => {
                            couponId = data.id;
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            couponId = data.id;
                            setConfirmState(true);
                          }}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              {!data && (
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
      <ConfirmDialog
        show={showConfirm}
        title={"Warning !"}
        text="Do you want to Delete coupon?"
        onHide={() => {
          setConfirmState(false);
        }}
        onCancel={() => {
          setConfirmState(false);
        }}
        onConfirmDelete={() => {
          setConfirmState(false);
        }}
      />
    </>
  );
}

export default React.memo(CouponCodeList);
