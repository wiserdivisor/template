import React from "react";
import data from "../data/anchor_data.json";
import "../styles/footer.css";
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
      <div className="footer-div">
        <div className="footer-flex">
          <div style={{ gridColumn: 1, gridColumnEnd: 1 }}>
            <div className="footer-card">
              <div className="footer-header">Register</div>
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
            <div className="cflex-row">
              <a
                href="https://wa.me/919136359123"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage
                  src="../images/whatsapp.png"
                  alt=""
                  className="footer-icon"
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
                  className="footer-icon"
                />
              </a>
              <StaticImage
                src="../images/facebook.png"
                alt=""
                className="footer-icon"
              />
              <StaticImage
                src="../images/twitter.png"
                alt=""
                className="footer-icon"
                style={{ marginRight: 0 }}
              />
            </div>
          </div>
          <FooterColumn title="Course" links={homeList} />
          <FooterColumn title="About" links={aboutList} />
          <FooterColumn title="Business" links={franchiseList} />
        </div>
      </div>
      <div className="copyright-band">Copyright © AEVRT (India) 2021</div>
    </>
  );
};

export { Footer };
