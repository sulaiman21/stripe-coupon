import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Navbar from "../components/Navbar";
import CouponGenerator from "../components/CouponGenerator";
import CouponCodeList from "../components/CouponCodeList";
import HOC from "../HOC/HOC";

import Loader from "../components/Loader";
import AlertComponent from "../components/Alert";

export class HomePage extends PureComponent {
  render() {
    return (
      <>
        <Loader show={this.props.loading} />
        <Navbar />
        {/** Content */}
        <HOC>
          <CouponGenerator getCouponList={this.getCouponList} />
          <CouponCodeList />
        </HOC>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.couponList.loading,
});

export default connect(mapStateToProps, null)(HomePage);
