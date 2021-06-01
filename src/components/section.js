import * as React from "react";

const Section = ({ title, children }) => {
  return (
    <div
      style={{
        padding: 25,
        borderRadius: 10,
        boxShadow: "0px 5px 5px #888888",
        background: "linear-gradient(to left, #f8f8f8, white)",
        marginTop: 20
      }}
    >
      <p style={{ color: "indianred", fontWeight:'bold', fontSize:20 }}>{title}</p>
      <hr />
      <p style={{ color: "dimgrey" }}>{children}</p>
    </div>
  );
};

export default Section;
