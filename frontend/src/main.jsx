import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store"; // Import the Redux store

import { loginUser } from "./redux/slices/authSlice"; // Adjust path if needed
import App from "./App";
import "./index.css"; // Ensure styles are imported
window.store = store;
window.loginUser = loginUser;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
