import { combineReducers } from "redux";

import CouponListReducer from "./reducers/couponListReducer";

const rootReducer = combineReducers({
  couponList: CouponListReducer,
});

export default rootReducer;
