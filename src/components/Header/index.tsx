import React from "react";
import Link from "gatsby-link";

import styles from "./index.module.css";

const Header: React.FC = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.inner}>
        <Link to="/" className={styles.link}>
          Github Repos
        </Link>
      </div>
    </nav>
  );
};

export default Header;
