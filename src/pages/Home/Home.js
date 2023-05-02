import React from "react";
import styles from "./Home.module.scss";
import logoLong from "../../assets/images/logo_long.webp"

export default function Home() {
  return (
    <section className={`${styles.allHome}`}>
      <div className={`${styles.bloc}`}>
        <img src={logoLong} alt="Logo G-Sathan" className={`${styles.img}`} />
        <h2 className={`${styles.slogan}`}>your tattoo,</h2>
        <h2 className={`${styles.slogan}`}>your personality</h2>
      </div>
    </section>
  );
}
