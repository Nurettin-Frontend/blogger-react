import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import store, { persistedStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Router basename={window.location.pathname || ''}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
