import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./store/rootReducer";
import { App } from "./components/App";
import { getRequest } from "./store/get/actions";

window.addEventListener("load", () => {
  const wrapper = document.querySelector("#react-root");
  const store = configureStore({
    reducer: rootReducer,
  });

  if (!wrapper) return null;

  store.dispatch(getRequest("http://localhost:3001/todos"));

  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
});
