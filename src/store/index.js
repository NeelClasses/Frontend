import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { storeUserReducer } from "./reducer/userReducer";
import purchaseCourseReducer from "./reducer/purchaseCourseReducer";

const reducer = combineReducers({
  userInfo: storeUserReducer,
  course: purchaseCourseReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: { userInfo: userInfoFromStorage },
  courseToPurchase: {},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
