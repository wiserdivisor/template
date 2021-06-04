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
      <Navbar />
      <div style={{ marginLeft: 10 }}>
        <div className={headerDiv}>
          <div className={siteLogo}>
            <StaticImage src="../images/logo.png" alt="" />
          </div>
          <p className={headerText}>{pageTitle}</p>
          {pageTitle[0] === "Æ" ? (
            <>
              <hr className={divider} />
              <p className={headerSubtext}>
                A KBP Trust & Institute of Engineering and Applied Sciences
                Initiative
              </p>
            </>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
