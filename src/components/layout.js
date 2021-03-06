import React from "react";
import "../styles/layout.css";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import { StaticImage } from "gatsby-plugin-image";
import favicon from "../images/favicon.ico";
import logo from "../images/avert.png";
import { Footer } from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className="container">
      <Helmet
        htmlAttributes={{ lang: "en" }}
        meta={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },

          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Academy of Electric Vehicles Research and Technology.",
          },
          {
            property: "og:description",
            content:
              "EV Course - Electric Vehicles Assembly, Maintenence & Repairs Training. Includes sizing, testing, troubleshooting and component-level repairs of battery, EV Controller, DC to DC converter and battery pack assembly. EV motors and hubs.",
          },
          { property: "og:url", content: "https://trainingev.gatsbyjs.io" },
          { property: "og:image", content: `${logo}` },
        ]}
        link={[{ rel: "icon", type: "image/x-icon", href: `${favicon}` }]}
      >
        <title>{pageTitle} - ÆVRT</title>
        <meta property="og:url" content="https://trainingev.gatsbyjs.io" />

        <meta
          name="description"
          content="EV Course - Electric Vehicles Assembly, Maintenence & Repairs Training. Includes sizing, testing, troubleshooting and component-level repairs of battery, EV Controller, DC to DC converter and battery pack assembly. EV motors and hubs."
        />
      </Helmet>
      <div className="headerDiv">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="siteLogo">
            <StaticImage src="../images/logo.png" alt="" />
          </div>
          <p className="headerText">{pageTitle}</p>
        </div>
        {pageTitle[0] === "A" ? (
          <>
            <p className="headerSubtext">
              A KBP Trust & Institute of Engineering and Applied Sciences
              Initiative
            </p>
            <hr className="divider" />
          </>
        ) : null}

        <div style={{ display:'flex', justifyContent:'center' }}>
          <StaticImage src="../images/evalueBanner.PNG" style={{ width:700, borderRadius:10 }} alt="" />
        </div>
      </div>
      <Navbar title={pageTitle} />
      <div style={{ minWidth: 500, maxWidth: "50%", margin: "auto" }}>
        {children}
      </div>
      <div
        style={{
          position: "sticky",
          width: "inherit",
          textAlign: "center",
          bottom: 0,
          color: "white",
          fontSize: 10,
          margin: "10px 0px 0px 0px",
          padding: "10px 0px 10px 0px",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        Designed and developed by vigneshreddy.mumbai@gmail.com
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
