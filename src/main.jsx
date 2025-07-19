import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { app } from "../fireBaseConfig.js";
import { Provider } from "react-redux";
 import store  from "../reduxStorage/Store.js";

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
   </React.StrictMode>
);
