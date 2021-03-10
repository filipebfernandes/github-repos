import React from "react";

import styles from "./index.module.css";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return <div className={styles.root}>{children}</div>;
}

export default Layout;
