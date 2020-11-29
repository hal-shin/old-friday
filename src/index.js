import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./theme/theme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const customTitleBar = window.require("custom-electron-titlebar");

new customTitleBar.Titlebar({
  backgroundColor: customTitleBar.Color.fromHex("#333"),
  menu: null,
  titleHorizontalAlignment: "left",
  unfocusEffect: false,
  closeable: true,
});

// myTitleBar.updateTitle("Friday - Your Personal Assistant");

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
