import {
  couponListLoading,
  couponListFailed,
  couponListSuccess,
} from "../actions/couponsListActions";

import { store } from "../store";
import http from "../configs/http";
import { urls } from "../configs/urls";

//a centralized function for getting coupon lists
export const getCouponList = () => {
  store.dispatch(couponListLoading());

  http
    .post(urls.getCouponCodes)
    .then((res) => {
      return store.dispatch(couponListSuccess(res.data.response.data));
    })
    .catch((err) => {
      this.setState({
        showLoader: false,
        showAlert: true,
        alertSuccess: false,
      });
      console.log("Error: ", err);
      return store.dispatch(couponListFailed());
    });
};
