/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Episode from "./Episode";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="episode/:id/:date" element={<Episode />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
