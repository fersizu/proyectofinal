import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./Components/App";

const asdf = document.getElementById("asdf");
const root = createRoot(asdf);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
createRoot(document.getElementById("asdf")).render(<App />);
