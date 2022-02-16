/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import Figure from "../figure/Index";
// eslint-disable-next-line import/no-unresolved
import Rate from "../rate/rate";
// eslint-disable-next-line import/no-unresolved
import Title from "../title";
import { Wrapper, Space } from "../layout/Structure";
import { CardWrapper } from "./card.styles";
/* eslint-disable react/react-in-jsx-scope */
export default function Card(props: any) {
  const [data] = useState<any>(props);
  // This function will sanitize every string comes from API.
  const stripTag = (text: string) => text.replace(/(<([^>]+)>)/gi, "");
  const dateFormat = (date: string) => {
    if (!date) return false;
    const dateSplit = date.split("-");
    return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
  };

  return (
    <CardWrapper style={{ margin: "16px 0" }}>
      <Figure {...data.info.image} size={data.size ? data.size : "medium"} />

      <Wrapper className="row" style={{ padding: 16 }}>
        <div style={{ display: "inline-block" }}>
          <Title type="h1">{data.info.name}</Title>
          <Title type="h2">{dateFormat(data.info.airdate)}</Title>
          <Title type="h2">
            {data.info.season ? `Season: ${data.info.season}` : ""}
          </Title>
          <Space />

          <Title type="p">{stripTag(data.info.summary)}</Title>

          <Space />
          <Rate {...data.info.rating} />
          <Space />
          {props.children}
        </div>
      </Wrapper>
    </CardWrapper>
  );
}
