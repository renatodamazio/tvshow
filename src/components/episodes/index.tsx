/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Figure from "../figure/Index";

export default function index(props: any) {
  const [episodes] = useState(props);
  return (
    <div>
      {episodes.map((episode: any) => (
        <li>
          <Figure {...props} />
          {episode.name}
        </li>
      ))}
    </div>
  );
}
