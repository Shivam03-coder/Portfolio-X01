import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./app-state/store";

const Appcontainer = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};

export default Appcontainer;
