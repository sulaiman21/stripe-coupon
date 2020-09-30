import React, { PureComponent } from "react";

import Navbar from "../components/Navbar";
import CouponGenerator from "../components/CouponGenerator";
import CouponCodeList from "../components/CouponCodeList";
import HOC from "../HOC/HOC";

import Loader from "../components/Loader";
import AlertComponent from "../components/Alert";
import http from "../configs/http";
import { urls } from "../configs/urls";

export class HomePage extends PureComponent {
  state = {
    showLoader: false,
    showAlert: false,
    alertSuccess: false,
    data: [],
  };
  componentDidMount() {
    //on home page load, get all coupon codes
    this.setState({ showLoader: true });
    http
      .post(urls.getCouponCodes)
      .then((res) => {
        this.setState({
          showLoader: false,
          showAlert: true,
          alertSuccess: true,
          data: res.data.response.data,
        });
        console.log(res.data.response.data);
        return;
      })
      .catch((err) => {
        this.setState({
          showLoader: false,
          showAlert: true,
          alertSuccess: false,
        });
        console.log("Error: ", err);
        return;
      });
  }

  render() {
    const { showLoader, showAlert, alertSuccess, data } = this.state;
    return (
      <>
        <Loader show={showLoader} />
        <Navbar />
        {/** Content */}
        <HOC>
          <AlertComponent
            show={showAlert}
            variant={alertSuccess ? "success" : "danger"}
            text={
              alertSuccess
                ? `Stripe coupon loaded`
                : `Sripe coupon's failed to load`
            }
          />
          <CouponGenerator />
          <CouponCodeList data={data} />
        </HOC>
      </>
    );
  }
}

export default HomePage;
