import React from "react";
import { Link } from "gatsby";
import {
  navbar,
  navLinks,
  navLinkItem,
  navLinkText,
  dropDown,
} from "./layout.module.css";
import data from "../data/anchor_data.json";

function DropDown({ links = [{ link: "#", title: "No items." }] }) {
  return (
    <div className={dropDown}>
      {links.map((x,index) => (
        <div className={navLinkItem} key={index}>
          <a style={{ textDecoration: "none", color: "dimgrey" }} href={x.link}>
            {x.title}
          </a>
          <br />
        </div>
      ))}
    </div>
  );
}

function Navbar() {
  const homeLinks = data.home;
  return (
    <div className={navbar}>
      <div className={navLinks}>
        <div className={navLinkItem} style={{ backgroundColor: "#7c6c80" }}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
          <DropDown links={homeLinks} />
        </div>

        <div className={navLinkItem} style={{ backgroundColor: "#a58faa" }}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </div>

        <div className={navLinkItem} style={{ backgroundColor: "#eb8988" }}>
          <Link to="/evnews" className={navLinkText}>
            News
          </Link>
        </div>
        <div className={navLinkItem} style={{ backgroundColor: "#ce97b0" }}>
          <Link to="/contact" className={navLinkText}>
            Contact
          </Link>
        </div>

        <div className={navLinkItem} style={{ backgroundColor: "#a58faa" }}>
          <Link to="/register" className={navLinkText}>
            Register
          </Link>
        </div>

        <div className={navLinkItem} style={{ backgroundColor: "#7c6c80" }}>
          <Link to="/business" className={navLinkText}>
            Business
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
