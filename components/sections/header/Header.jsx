"use client";

import "./header.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleMenuOpen = (e) => {
    setActive(!active);
  };

  return (
    <header className="header container">
      <div className="nav-logo">
        <Image src="/logo.svg" fill alt="logo" />
      </div>
      <ul className="nav-links hideMobile">
        <li className="nav-link link">
          <Link className="nav-link-text" href="#">
            Home
          </Link>
        </li>
        <li className="nav-link link">
          <Link className="nav-link-text" href="#">
            Schedule
          </Link>
        </li>
        <li className="nav-link link">
          <Link className="nav-link-text" href="#">
            About
          </Link>
        </li>
      </ul>
      <div
        id="menu-toggle"
        className={`menu-toggle ${active ? "nav-open" : ""} showMobile`}
        onClick={handleMenuOpen}
      >
        <span className="menu-toggle-bar menu-toggle-bar--top"></span>
        <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
        <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        <ul className={`mobile-nav-links ${active ? "nav-open" : ""}`}>
          <li className="mobile-nav-link link">
            <Link className="mobile-nav-link-text" href="#">
              Home
            </Link>
          </li>
          <li className="mobile-nav-link link">
            <Link className="mobile-nav-link-text" href="#">
              Schedule
            </Link>
          </li>
          <li className="mobile-nav-link link">
            <Link className="mobile-nav-link-text" href="#">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
