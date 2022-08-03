import React from "react";
import Band from "./Band";

function Content({ data }) {
  const bands = data.map((band) => {
    console.log(band.id);
    return (
      <div key={band.id}>
        <Band band={band} />
      </div>
    );
  });

  return <div>{bands}</div>;
}

export default Content;
