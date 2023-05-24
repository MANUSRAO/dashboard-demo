import React from "react";
import { Link } from "react-router-dom";

import { BellOutlined } from "@ant-design/icons";

import styles from "../styles/Navbar.module.css";

import circle from "../assets/img/circle.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <p className={styles.mainLogo}>Stonovation</p>
      </Link>
      <ul className={styles.sidenav}>
        <li>
          <Link to="/notifications">
            <BellOutlined style={{ color: "#0066FF" }} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <div className={styles.profileLogo}>
              <img src={circle} alt="Logo" />
              <p>Ashish</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
