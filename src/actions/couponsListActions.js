export const CouponListActionTypes = {
  LOADING_COUPON: "/actions/coupon/LOADING",
  SUCCESS_COUPON: "/actions/coupon/SUCCESS",
  FAILED_COUPON: "/actions/coupon/FAILED",
};

export function couponListLoading() {
  return {
    type: CouponListActionTypes.LOADING_COUPON,
  };
}

export function couponListSuccess(payload) {
  return {
    type: CouponListActionTypes.SUCCESS_COUPON,
    payload,
  };
}

export function couponListFailed() {
  return {
    type: CouponListActionTypes.FAILED_COUPON,
  };
}
