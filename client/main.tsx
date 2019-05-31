import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import useStore, { Provider } from "./store";
import App from "./App";


ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("#app")
);
