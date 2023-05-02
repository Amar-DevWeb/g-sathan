import React from "react";
import styles from "./Tatoos.module.scss";
import Titre from "../../components/Title/Title.js";
import Slider from "../../components/SliderImage/SliderImage.js";
import Image1 from "../../assets/images/illu_arm_1.webp";
import Image2 from "../../assets/images/illu_back_1.webp";

export default function Tatoos() {
  const slides = [Image1, Image2];
  return (
    <section className={`${styles.allTatoos}`}>
      {/* absolute Bloc */}
      <div className={`${styles.waveRelative}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={`${styles.waveFixed}`}
        >
          <path d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      {/* flex bloc */}
      <Titre text="Artwork tattoos" />
      <div className={`${styles.divSlider}`}>
        <div className={`${styles.Slider}`}>
          <Slider>
            {slides.map((s) => (
              <img src={s} className={`${styles.imgSlide}`} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
