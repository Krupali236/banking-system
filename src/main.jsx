import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
// import AppRouter from "./router/appRouter.jsx";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <AppRouter /> */}
    <StrictMode>
      <App />
    </StrictMode>
    
  </Provider>

  // <StrictMode>
  //   <App />
  // </StrictMode>,
);
