// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={appStore}>
//     <App />
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import AuthProvider from "./utils/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <Router>
      <AuthProvider />
      <App />
    </Router>
  </Provider>
);
