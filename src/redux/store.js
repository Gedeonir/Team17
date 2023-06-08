import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from "redux-state-sync";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducer";

const config = {};
const middleware = [thunk, createStateSyncMiddleware(config)];
const Store = createStore(
  rootReducer,
  composeWithDevTools(compose(applyMiddleware(...middleware)))
);
export default Store;