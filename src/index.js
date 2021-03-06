import React from "react";
import ReactDOM from "react-dom";
import Roots from "./Roots";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Roots>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Roots>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
