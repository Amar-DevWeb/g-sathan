import React from "react";
import ImgWork from "../../assets/images/exemple_travail_1.webp";
import styles from "./Card.module.scss";
export default function Card({
  description,
  date,
}) {
  return (
    <section className={`${styles.allCard}`}>
      <section className={`${styles.Card}`}>
        <img src={ImgWork} alt={ImgWork} className={`${styles.Img}`} />
        <div className={`${styles.allDescription}`}>
          <h2 className={`${styles.date}`}>{date}</h2>
          <p className={`${styles.description}`}>{description}</p>
          <div className={`${styles.divBtn}`}>
            <button className={`${styles.btn}`}>Mettre à l’agenda</button>
          </div>
        </div>
      </section>
    </section>
  );
}
