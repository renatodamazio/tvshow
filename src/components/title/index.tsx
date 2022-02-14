/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

export default function index(props: any) {
  // Type is the tag type, could be anything h1, h2, h3 or even markup tags.
  const Text = React.createElement(
    props.type,
    { class: props.className },
    props.children,
  );
  return <> {Text} </>;
}
