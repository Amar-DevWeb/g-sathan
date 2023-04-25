import React from "react";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav>
      <p className={`${styles.links}`}>Home</p>
      <p className={`${styles.links}`}>Tatoos</p>
      <p className={`${styles.links}`}>Calendar</p>
      <p className={`${styles.links}`}>Contact</p>
    </nav>
  );
}
