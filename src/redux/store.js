import {createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const Middleware = [];

if(process.env.NODE_ENV === "development"){
    Middleware.push(logger);

}
const store = createStore(rootReducer, applyMiddleware(...Middleware));
export default store;