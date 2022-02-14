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

  const styles = {
    width: "100px",
    heigh: "100px",
    border: "2px solid #000",
  };

  console.log(image);

  return (
    <div className="figure">
      <img
        src={image.size === "medium" ? image.medium : image.original}
        alt=""
        style={styles}
      />
    </div>
  );
}
