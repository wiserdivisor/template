import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
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
        <p style={{ fontSize: 12, color: "white", textAlign: "center", marginTop:20 }}>
          A KBP Trust & Institute of Engineering and Applied Sciences Initiative
        </p>
      </div>
      {children}
    </main>
  );
};

export default Layout;
