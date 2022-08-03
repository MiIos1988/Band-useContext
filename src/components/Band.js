import React from "react";
import "../css/band.css";

function Band({ band }) {
  return (
    <div className="band">
      <div className="hed">
        <h2>naslov</h2>
      </div>
      <div className="body">
        <img src="#" alt="img" />
        <p>text</p>
      </div>
      <div className="fut">
        <button>Read more</button>
      </div>
    </div>
  );
}

export default Band;
