import React, { useContext } from "react";
import "../css/band.css";
import { DataContext } from "../App";

function Band({ band }) {
  const getData = useContext(DataContext);

  return (
    <div className="band">
      <div className="hed">
        <h2>{band.name}</h2>
      </div>
      <div className="body">
        <img src={band.img_url} alt="img" />
        <p>{band.info.substr(0, 160)} ...</p>
      </div>
      <div className="fut">
        <button
          onClick={() => {
            getData(band);
          }}
        >
          Read more
        </button>
      </div>
    </div>
  );
}

export default Band;
