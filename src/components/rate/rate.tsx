/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from "react";

interface value {
  average: number;
}

const style = {
  color: "#ffeb3b",
  fontSize: 20,
};

export default function rate(props: value) {
  const [values] = useState<value>({ ...props });
  //  This small function will organize the average note in one array.
  //  With this we will be able to render the 'stars' icons.
  const totalStars = Array.from(Array(Math.floor(values?.average / 2)).keys());

  return (
    <div>
      {totalStars.map(() => (
        <i className="fa-solid fa-star" style={style} />
      ))}
    </div>
  );
}
