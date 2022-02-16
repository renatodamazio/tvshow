/* eslint-disable import/no-unresolved */
import React from "react";
import { Container, Space } from "./components/layout/Structure";
import Title from "./components/title/index";

export default function ResultNotFound() {
  return (
    <Container
      className="column"
      style={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Title type="h1">SEARCH NOT FOUND</Title>
      <Space />
      <Title type="h2">Check your terms and try again.</Title>
    </Container>
  );
}
