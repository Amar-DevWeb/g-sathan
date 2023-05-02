import React from "react";
import styles from "./Title.module.scss";

export default function title({text}) {
  return (
    <section className={`${styles.titleBloc}`}>
      <h1 className={`${styles.titleText}`}>{text}</h1>
    </section>
  );
}
