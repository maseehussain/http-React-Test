import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//46- import axios
import Axios from "axios";

//48- Using Axios to shorten the API calls with global configuration
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
//49- Axios can set a default config that can be used application wide.
Axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
Axios.defaults.headers.post["Content-Type"] = "application/json";

//47- accessing the interceptors
Axios.interceptors.request.use(
  req => {
    console.log(req);
    return req;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

Axios.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
