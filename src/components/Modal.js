import React from "react";
import "../css/modal.css";

function Modal({ modal }) {
  return (
    <div className="content">
      <div className="modalHed">{modal.name}</div>
      <div className="modalImg">
        <img src={modal.thumb1} alt="thumb1" />
        <img src={modal.thumb2} alt="thumb2" />
        <img src={modal.thumb3} alt="thumb3" />
      </div>
      <div className="modalText">{modal.info}</div>
      <div className="modalFut">
        <button
          onClick={() => {
            document.querySelector(".content").style.display = "none";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
