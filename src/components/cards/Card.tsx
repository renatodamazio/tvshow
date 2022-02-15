/* eslint-disable no-sequences */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import Figure from "../figure/Index";
// eslint-disable-next-line import/no-unresolved
import Rate from "../rate/rate";
// eslint-disable-next-line import/no-unresolved
import Title from "../title";

/* eslint-disable react/react-in-jsx-scope */
export default function Card<info>(props: info) {
  const [data] = useState<any>(props);
  // This function will sanitize every string comes from API.
  const stripTag = (text: string) => text.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <Figure {...data.info.image} size={data.size ? data.size : "medium"} />
      <Title type="h1">{data.info.name}</Title>
      <Title type="h2">{data.info.airdate}</Title>
      <Title type="h3">{data.info.season}</Title>
      <Title type="p">{stripTag(data.info.summary)}</Title>
      <Rate {...data.info.rating} />
    </>
  );
}
