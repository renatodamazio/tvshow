/* eslint-disable object-curly-spacing */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { CardFigure } from "../cards/card.styles";

export default function Index(props: any) {
  interface imageProps {
    medium: string;
    original: string;
    size: string;
  }

  const [image] = useState<imageProps>({ ...props });

  console.log(image.size);

  return (
    <CardFigure className={props.className}>
      <img
        src={image.size === "medium" ? image.medium : image.original}
        alt=""
      />
    </CardFigure>
  );
}
