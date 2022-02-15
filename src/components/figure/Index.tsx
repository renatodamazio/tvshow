/* eslint-disable object-curly-spacing */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

export default function Index(props: any) {
  interface imageProps {
    medium: string;
    original: string;
    size: string;
  }

  const [image] = useState<imageProps>({ ...props });

  return (
    <div className="figure">
      <img
        src={image.size === "medium" ? image.medium : image.original}
        alt=""
      />
    </div>
  );
}
