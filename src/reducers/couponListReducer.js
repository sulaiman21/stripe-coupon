import { CouponListActionTypes } from "../actions/couponsListActions";

const initialState = {
  loading: false,
  success: false,
  failed: false,
  data: [],
};

const couponListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CouponListActionTypes.LOADING_COUPON:
      return {
        ...state,
        loading: true,
        success: false,
        failed: false,
      };

    case CouponListActionTypes.SUCCESS_COUPON:
      return {
        ...state,
        loading: false,
        success: true,
        failed: false,
        data: actions.payload,
      };

    case CouponListActionTypes.FAILED_COUPON:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
      };

    default:
      return state;
  }
};

export default couponListReducer;
