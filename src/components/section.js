import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Section = ({ title, children }) => {
  return (
    <div
      style={{
        padding: "0px 30px 15px 20px",
        margin: "15px 0px 0px 0px",
        borderRadius: 10,
        boxShadow: "0px 5px 5px #888",
        background: "linear-gradient(to left, #f8f8f8, white)",
      }}
    >
      <div style={{ display: "flex", alignItems:'center' }}>
        <div style={{ width: 30, marginRight: 20 }}>
          <StaticImage src="../images/qhead.jpeg" alt="head_icon" />
        </div>
        <p style={{ color: "indianred", fontWeight: "bold", fontSize: 20 }}>
          {title}
        </p>
      </div>
      <hr style={{ marginTop: -5 }} />
      <p style={{ color: "dimgrey", fontSize:14 }}>{children}</p>
    </div>
  );
};

export default Section;
