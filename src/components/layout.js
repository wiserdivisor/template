import React from "react";
import {
  container,
  siteLogo,
  headerDiv,
  headerText,
  headerSubtext,
  divider,
  footerIcon,
} from "./layout.module.css";
import data from "../data/anchor_data.json";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import { StaticImage } from "gatsby-plugin-image";
import VisitSite from "../components/visitSiteButton";

function FooterColumn({
  title = "Header",
  links = [{ link: "#", title: "No Items." }],
}) {
  return (
    <div
      style={{
        marginRight: "2vw",
      }}
    >
      <div style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
        {title}
      </div>
      <div style={{ marginTop: 10 }}>
        {links.map((x) => (
          <>
            <a
              href={x.link}
              style={{ textDecoration: "none", color: "white", fontSize: 10 }}
            >
              {x.title}
            </a>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

const Layout = ({ pageTitle, children }) => {
  const homeList = data.home;
  const aboutList = data.about;
  const franchiseList = data.franchise;
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
        Designed and developed by vigneshreddy.mumbai@gmail.com
      </div>
      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          borderTopWidth: 3,
          borderTopColor: "teal",
          borderTopStyle: "solid",
          padding: 20,
          display: "grid",
        }}
      >
        <div style={{ display: "flex", gridColumnStart: 1, gridColumnEnd: 4 }}>
          <div
            style={{
              color: "teal",
              marginRight: "2vw",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              border:'2px solid teal',
              boxShadow:'0px 5px 2px #333'
            }}
          >
            <div
              style={{
                color: "teal",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Register
            </div>
            <p style={{ color:'dimgrey' }}>
              Start your EV journey with us.
              <br />
              <br />
              Click below!
            </p>
            <a href="/register" style={{ alignSelf: "center" }}>
              <VisitSite showHr={false} name="Register" bgColor="teal" />
            </a>
          </div>

          <FooterColumn title="Course" links={homeList} />
          <FooterColumn title="About" links={aboutList} />
          <FooterColumn title="Business" links={franchiseList} />
        </div>
        <div
          style={{
            gridColumnStart: 5,
            gridColumnEnd: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <a href="https://wa.me/9136359123" target="_blank" rel="noreferrer">
            <StaticImage
              src="../images/whatsapp.png"
              alt=""
              className={footerIcon}
            />
          </a>
          <a
            href="mailto:ieas.training@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../images/email.png"
              alt=""
              className={footerIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <StaticImage
              src="../images/facebook.png"
              alt=""
              className={footerIcon}
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <StaticImage
              src="../images/twitter.png"
              alt=""
              className={footerIcon}
              style={{ marginBottom: "0px" }}
            />
          </a>
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          fontSize: 12,
          margin: "0px 0px -10px 0px",
          backgroundColor: "grey",
          padding: "10px 10px 10px 20px",
        }}
      >
        Copyright © AEVRT (India) 2021
      </div>
    </main>
  );
};

export default Layout;
