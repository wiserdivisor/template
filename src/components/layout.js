import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
  return (
    <main
      style={{
        margin: "auto",
        alignItems: "center",
        minWidth: 600,
        maxWidth: "60%",
        fontFamily: "sans-serif",
      }}
    >
      <nav>
        <ul className={navLinks}>
          <li
            style={{ height: 75, width: 75, marginRight: 50, marginLeft: 30 }}
          >
            <Link to="/">
              <StaticImage src="../images/logo.jpg" alt="" />
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/whyev" className={navLinkText}>
              Why EV?
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/register" className={navLinkText}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          padding: 10,
          backgroundColor: "#00adb5",
          alignItems: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: -20,
        }}
      >
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: 30,
            fontWeight: "bold",
            textShadow: "0px 5px 2px #000",
          }}
        >
          {pageTitle}
        </p>
        {pageTitle[0] === "Æ" ? (
          <>
            <hr
              style={{
                color: "white",
                backgroundColor: "white",
                fontSize: 5,
                width: "95%",
                height: 1,
                border: "none",
              }}
            />
            <p
              style={{
                fontSize: 12,
                color: "white",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              A KBP Trust & Institute of Engineering and Applied Sciences
              Initiative
            </p>
          </>
        ) : null}
      </div>
      {children}
    </main>
  );
};

export default Layout;
