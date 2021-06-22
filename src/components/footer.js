import React from "react";
import data from "../data/anchor_data.json";
import { footerIcon } from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import VisitSite from "../components/visitSiteButton";

function FooterColumn({
  title = "Header",
  links = [{ link: "#", title: "No Items." }],
}) {
  return (
    <div>
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

const Footer = () => {
  const homeList = data.home;
  const aboutList = data.about;
  const franchiseList = data.franchise;

  return (
    <>
      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          borderTopWidth: 3,
          borderTopColor: "teal",
          borderTopStyle: "solid",
          padding: 20,
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            gridGap: "5vw",
            display: "flex",
          }}
        >
          <div
            style={{
              gridColumn: 1,
              gridColumnEnd: 1,
            }}
          >
            <div
              style={{
                color: "teal",
                backgroundColor: "#fff",
                borderRadius: 10,
                padding: 10,
                display: "flex",
                flexDirection: "column",
                border: "2px solid teal",
                boxShadow: "0px 5px 2px #333",
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
              <p style={{ color: "dimgrey" }}>
                Start your EV journey with us.
                <br />
                <br />
                Click below!
              </p>
              <a href="/register" style={{ alignSelf: "center" }}>
                <VisitSite showHr={false} name="Register" bgColor="teal" />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <a
                href="https://wa.me/919136359123"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../images/whatsapp.png"
                  alt=""
                  className={footerIcon}
                />
              </a>
              <a
                href="mailto:aevrt.india@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../images/email.png"
                  alt=""
                  className={footerIcon}
                />
              </a>
              <StaticImage
                src="../images/facebook.png"
                alt=""
                className={footerIcon}
              />
              <StaticImage
                src="../images/twitter.png"
                alt=""
                className={footerIcon}
                style={{ marginRight: 0 }}
              />
            </div>
          </div>
          <FooterColumn title="Course" links={homeList} />
          <FooterColumn title="About" links={aboutList} />
          <FooterColumn title="Business" links={franchiseList} />
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          fontSize: 12,
          backgroundColor: "grey",
          padding: "10px 10px 10px 20px",
        }}
      >
        Copyright © AEVRT (India) 2021
      </div>
    </>
  );
};

export { Footer };
