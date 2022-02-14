/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Episode from "./Episode";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="episode" element={<Episode />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
