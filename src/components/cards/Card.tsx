/* eslint-disable no-sequences */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import Figure from "../Figure/Index";
// eslint-disable-next-line import/no-unresolved
import Rate from "../rate/rate";

/* eslint-disable react/react-in-jsx-scope */
export default function Card<info>(props: info) {
  const [data] = useState<any>(props);

  return (
    <div>
      <Figure {...data.info.image} size="medium" />
      {data.info.name}
      <Rate {...data.info.rating} />
    </div>
  );
}
