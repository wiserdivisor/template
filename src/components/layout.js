import React from "react";
import {
  container,
  siteLogo,
  headerDiv,
  headerText,
  headerSubtext,
  divider,
} from "./layout.module.css";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta
          name="description"
          content="EV Course - Electric Vehicles Assembly, Maintenence & Repairs Training. Includes sizing, testing, troubleshooting and component-level repairs of battery, EV Controller, DC to DC converter and battery pack assembly. EV motors and hubs."
        />
        <title>{pageTitle} - ÆVRT</title>
      </Helmet>
      <div className={headerDiv}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: pageTitle[1] === "c" ? "center" : "left",
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
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        Designed and developed by vigneshreddy.mumbai@gmail.com | Copyright ©
        2021 AEVRT (India)
      </div>
    </main>
  );
};

export default Layout;
