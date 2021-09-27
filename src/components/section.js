import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SectionHeader = ({
  showHr = true,
  showPoint = true,
  title = "",
  headerColor = "indianred",
}) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        {showPoint && (
          <div style={{ width: 30, marginRight: 20 }}>
            <StaticImage src="../images/qhead.jpeg" alt="head_icon" />
          </div>
        )}
        <p style={{ color: headerColor, fontWeight: "bold", fontSize: 20 }}>
          {title}
        </p>
        <div style={{ width:200, marginLeft:'auto' }}>
          <StaticImage src="../images/evalueLogo.PNG" style={{alignSelf:"flex-end"}} alt="end_icon" />
        </div>
      </div>
      {showHr && <hr style={{ marginTop: -5 }} />}
    </>
  );
};

const Section = ({
  idName,
  title,
  headerColor,
  showPoint,
  showHr,
  borderColor = "dimgrey",
  textAlign = "justify",
  children,
}) => {
  return (
    <div
      id={idName}
      style={{
        padding: "0px 30px 15px 20px",
        margin: "15px 0px 0px 0px",
        borderRadius: 10,
        border: "1px solid " + borderColor,
        boxShadow: "0px 5px 5px #888",
        background: "linear-gradient(to left, #f8f8f8, white)",
        scrollMarginTop: "1em",
        textAlign: textAlign,
      }}
    >
      <SectionHeader
        showHr={showHr}
        showPoint={showPoint}
        title={title}
        headerColor={headerColor}
      />
      <div style={{ color: "dimgrey", fontSize: 14 }}>
        {children}
      </div>
    </div>
  );
};

export { Section, SectionHeader };
