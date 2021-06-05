import React from "react";
import { Link } from "gatsby";
import {
  container,
  siteLogo,
  headerDiv,
  headerText,
  headerSubtext,
  divider,
} from "./layout.module.css";
import Navbar from "./navbar";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <div className={headerDiv}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={siteLogo}>
            <StaticImage src="../images/logo.png" alt="" />
          </div>
          <p className={headerText}>{pageTitle}</p>
        </div>
        {pageTitle[0] === "A" ? (
          <>
            <hr className={divider} />
            <p className={headerSubtext}>
              A KBP Trust & Institute of Engineering and Applied Sciences
              Initiative
            </p>
          </>
        ) : null}
      </div>
      <Navbar title={pageTitle} />
      {children}
      <div
        style={{
          position: "sticky",
          width: "inherit",
          textAlign: "center",
          marginTop: 10,
          bottom: 0,
          color: "white",
          fontSize: 10,
          padding: "10px 0px 10px 0px",
          backgroundColor: "rgba(0,173,181,0.5)",
        }}
      >
        Copyright © 2021 AEVRT India <br />
        Designed and developed by 4'Sight Technologies |
        vigneshreddy.mumbai@gmail.com
      </div>
    </div>
  );
};

export default Layout;
