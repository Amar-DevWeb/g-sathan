import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "./SliderImage.module.scss";

export default function SliderImage({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 8000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className={`${styles.divSlider}`}>
      <div className={`${styles.Slider}`}>
        <div className={`${styles.allSlider}`}>
          <div
            className={`${styles.Slide}`}
            style={{ transform: `translateX(-${curr * 130}%)` }}
          >
            {slides}
          </div>
          <div className={`${styles.divBtn}`}>
            <button onClick={prev} className={`${styles.btn}`}>
              <ChevronLeft className={`${styles.btnArrow}`} size={40} />
            </button>
            <button onClick={next} className={`${styles.btn}`}>
              <ChevronRight className={`${styles.btnArrow}`} size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
