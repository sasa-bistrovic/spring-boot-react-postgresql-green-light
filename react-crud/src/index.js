import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
     <Route path="/" component={ App }/>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
