import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";

const customTitleBar = window.require("custom-electron-titlebar");

let myTitleBar = new customTitleBar.Titlebar({
  backgroundColor: customTitleBar.Color.fromHex("#333"),
  menu: null,
  titleHorizontalAlignment: "left",
  unfocusEffect: false,
});

myTitleBar.updateTitle("Friday - Your Personal Assistant");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
