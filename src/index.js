import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddlware from "redux-thunk";
import "tachyons";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { App } from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";
import { createLogger } from "redux-logger";

const logger = createLogger()
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddlware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
