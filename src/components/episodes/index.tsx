/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Link } from "react-router-dom";
import Figure from "../figure/Index";
import { Wrapper } from "../layout/Structure";
import Title from "../title/index";
import { List } from "./espisodes.styles";

export default function index(props: any) {
  return (
    <ul style={{ width: "100%" }}>
      {props.list.map((episode: any) => (
        <List key={episode.id}>
          <Link to={`episode/${props.id}/${episode.airdate}`}>
            <Wrapper>
              <Figure {...episode.image} className="small" />
              <div style={{ paddingLeft: 10 }}>
                <Title type="p">{episode.name}</Title>
                <br />
                Season:
                {episode.season}
              </div>
            </Wrapper>
          </Link>
        </List>
      ))}
    </ul>
  );
}
