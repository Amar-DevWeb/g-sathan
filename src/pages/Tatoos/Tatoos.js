import React, { useEffect } from "react";
import styles from "./Tatoos.module.scss";
import Titre from "../../components/Title/Title.js";
import SliderImage from "../../components/SliderImage/SliderImage.js";
import Image1 from "../../assets/images/illu_arm_1.webp";
import Image2 from "../../assets/images/illu_back_1.webp";

export default function Tatoos({ tatoosRef, setVisible }) {
  const slides = [Image1, Image2];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.map((entry) => {
          entry.isIntersecting && setVisible(2);
        });
      },
      { threshold: 0.51 }
    );
    tatoosRef.current && observer.observe(tatoosRef.current);
  }, [tatoosRef]);
  return (
    <section className={`${styles.allTatoos}`} ref={tatoosRef}>
      {/* absolute Bloc */}
      <div className={`${styles.waveRelative}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1485 160"
          className={`${styles.waveFixed}`}
        >
          <path d="M0 96L82.5 106.7C165 117 330 139 495 122.7C660 107 825 53 990 26.7C1155 -3.8147e-06 1320 0 1402.5 0H1485V160H1402.5C1320 160 1155 160 990 160C825 160 660 160 495 160C330 160 165 160 82.5 160H0V96Z" />
        </svg>
      </div>
      {/* flex bloc */}
      <Titre text="Artwork tattoos" />
      <SliderImage>
        {slides.map((s) => (
          <img
            key={crypto.randomUUID()}
            src={s}
            className={`${styles.imgSlide}`}
            alt="image"
          />
        ))}
      </SliderImage>
    </section>
  );
}
