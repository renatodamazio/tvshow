/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Episode from "./Episode";
import App from "./App";
import Header from "./components/Header/Index";
import { Container } from "./components/layout/Structure";
import { Store } from "./store";

ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={Store}>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="episode/:id/:date" element={<Episode />} />
        </Routes>
      </Container>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);
