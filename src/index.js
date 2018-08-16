import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//46- import axios
import Axios from "axios";

//47- accessing the interceptors
Axios.interceptors.request.use(req => {
  console.log(req);
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
