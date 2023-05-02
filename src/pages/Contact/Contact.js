import React from "react";
import styles from "./Contact.module.scss";
import Titre from "../../components/Title/Title.js";
import Form from "../../components/Form/Form";

export default function Contact() {
  return (
    <section className={`${styles.allContact}`}>
      <div className={`${styles.waveRelative}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={`${styles.waveFixed}`}
        >
          <path d="M0,256L80,266.7C160,277,320,299,480,282.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <Titre text="Contact" />
      <Form/>
    </section>
  );
}