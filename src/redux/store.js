import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducer";
import { LoginReducer } from "./Reducer/LoginReducer";

const initialState = {};
const middlewares = [thunk];
let devtools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;
const Store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default Store;