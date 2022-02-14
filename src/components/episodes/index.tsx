/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Figure from "../figure/Index";

export default function index(props: any) {
  return (
    <div>
      {props.list.map((episode: any) => (
        <li key={episode.id}>
          <Figure {...episode.image} />
          {episode.name}
          <br />
          Season:
          {' '}
          {episode.season}
        </li>
      ))}
    </div>
  );
}
