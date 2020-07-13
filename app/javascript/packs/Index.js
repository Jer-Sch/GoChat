import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import App from "../src/App";
import { ActionCableProvider } from "react-actioncable-provider";
// import registerServiceWorker from "./registerServiceWorker";
import { API_WS_ROOT } from "../src/constants";

document.addEventListener("DOMContentLoaded", () => {
  render(
    <ActionCableProvider url={API_WS_ROOT}>
      <App />
    </ActionCableProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});