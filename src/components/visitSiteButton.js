import React from "react";
import { btn } from "./btn.module.css";
import { divider } from "./layout.module.css";

function VisitSite({
  name = "Visit Site",
  showHr = true,
  bgColor = "#4285f4",
}) {
  return (
    <div>
      <button className={btn} style={{ backgroundColor: bgColor }}>
        {name}
      </button>
      {showHr && (
        <hr
          className={divider}
          style={{
            backgroundColor: "grey",
            marginTop: 20,
            width: "50vw",
          }}
        />
      )}
    </div>
  );
}

export default VisitSite;
