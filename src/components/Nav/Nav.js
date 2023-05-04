import React, { useRef } from "react";
import styles from "./Nav.module.scss";

export default function Nav({
  homeRef,
  tatoosRef,
  calendarRef,
  contactRef,
  visible,
}) {
  function handleClick(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav>
      <p
        className={`${styles.links} ${visible === 1 && styles.active}`}
        onClick={() => handleClick(homeRef)}
      >
        Home
      </p>
      <p
        className={`${styles.links} ${visible === 2 && styles.active}`}
        onClick={() => handleClick(tatoosRef)}
      >
        Tatoos
      </p>
      <p
        className={`${styles.links} ${visible === 3 && styles.active}`}
        onClick={() => handleClick(calendarRef)}
      >
        Calendar
      </p>
      <p
        className={`${styles.links} ${visible === 4 && styles.active}`}
        onClick={() => handleClick(contactRef)}
      >
        Contact
      </p>
    </nav>
  );
}
