import React from "react";
import Band from "./Band";

function Content({ data }) {
  const bands = data.map((band) => {
    return (
      <div key={band.id}>
        <Band band={band} />
      </div>
    );
  });

  return <div className="container">{bands}</div>;
}

export default Content;
