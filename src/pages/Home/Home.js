import React from "react";
import styles from "./Home.module.scss";
import logoLong from "../../assets/images/logo_long.webp";
import { useEffect } from "react";

export default function Home({ homeRef, setVisible }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting && setVisible(1);
        });
      },
      { threshold: 0.51 }
    );
    homeRef.current && observer.observe(homeRef.current);
  }, [homeRef]);
  return (
    <section className={`${styles.allHome}`} ref={homeRef}>
      <div className={`${styles.bloc}`}>
        <img src={logoLong} alt="Logo G-Sathan" className={`${styles.img}`} />
        <h2 className={`${styles.slogan}`}>your tattoo,</h2>
        <h2 className={`${styles.slogan}`}>your personality</h2>
      </div>
    </section>
  );
}
