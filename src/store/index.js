import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import contactsReducer from "./reducers/contactsReducer";

export default createStore(contactsReducer, applyMiddleware(thunk, logger));
