/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CardFigure } from "../cards/card.styles";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Index(props: any) {
  interface imageProps {
    medium: string;
    original: string;
    size: string;
  }

  const [image] = useState<imageProps>({ ...props });

  return (
    <CardFigure className={props.className}>
      <LazyLoadImage
        effect="blur"
        src={image.size === "medium" ? image.medium : image.original}
        alt=""
      />
    </CardFigure>
  );
}
