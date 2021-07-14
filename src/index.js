import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
//import CssBaseline from '@material-ui/core/CssBaseline';




import App from "./App";
import taskReducer from "./reducers/taskCard";

const middlewareEnhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(taskReducer, middlewareEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
