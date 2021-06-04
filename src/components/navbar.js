import React from "react";
import { Link } from "gatsby";
import { navbar, navLinks, navLinkItem, navLinkText } from './layout.module.css';

function Navbar() {
  return (
    <div className={navbar}>
      <div className={navLinks}>
        <div className={navLinkItem} style={{ backgroundColor: "#fbc6a4", paddingLeft:30 }}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </div>
        <div className={navLinkItem} style={{ backgroundColor: "#f4a9a8" }}>
          <Link to="/whyev" className={navLinkText}>
            Why EV?
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
      </div>
    </div>
  )
}

export default Navbar;
