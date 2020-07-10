import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/contacts";

export default createStore(reducer, applyMiddleware(thunk, logger));
