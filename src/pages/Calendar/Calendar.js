import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.scss";
import Titre from "../../components/Title/Title.js";
import Card from "../../components/Card/Card.js";

export default function Calendar({ calendarRef, setVisible }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting && setVisible(3);
        });
      },
      { threshold: 0.51 }
    );
    calendarRef.current && observer.observe(calendarRef.current);
  }, [calendarRef]);
  const [status, setStatus] = useState(true);
  return (
    <section className={`${styles.allCalendar}`} ref={calendarRef}>
      <div className={`${styles.waveRelative}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1485 160"
          className={`${styles.waveFixed}`}
        >
          <path d="M0 96L82.5 106.7C165 117 330 139 495 122.7C660 107 825 53 990 26.7C1155 -3.8147e-06 1320 0 1402.5 0H1485V160H1402.5C1320 160 1155 160 990 160C825 160 660 160 495 160C330 160 165 160 82.5 160H0V96Z" />
        </svg>
      </div>
      <Titre text="Calendar" />
      <div className={`${styles.CardScroll}`}>
        <Card
          className={`${styles.Card}`}
          date="Mettre une date de l'event"
          description="Mettre du description de l'event ou une description du gess qui vient au salon de tatoos"
        />
        <Card
          className={`${styles.Card}`}
          date="Mettre une date de l'event"
          description="Mettre du description de l'event ou une description du gess qui vient au salon de tatoos"
        />
        <Card
          className={`${styles.Card}`}
          date="Mettre une date de l'event"
          description="Mettre du description de l'event ou une description du gess qui vient au salon de tatoos"
        />
      </div>
    </section>
  );
}
