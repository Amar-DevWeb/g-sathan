import React, { useRef, useState } from "react";
import styles from "./Form.module.scss";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [id, setid] = useState(0);
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  const handelClick = (index) => {
    setid(index);
  };

  return (
    <section className={`${styles.allForm}`}>
      <form className={`${styles.form}`} ref={form} onSubmit={sendEmail}>
        <div className={`${styles.divSelection}`}>
          <div>
            <input
              type="radio"
              id="private"
              name="demande"
              value="private"
              className={`${styles.inputButton}`}
              required
            />
            <label
              for="private"
              onClick={() => {
                handelClick(1);
              }}
              className={`${styles.selection} ${
                id === 1 && `${styles.active}`
              }`}
            >
              Private
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="professional"
              name="demande"
              value="professional"
              className={`${styles.inputButton}`}
              required
            />
            <label
              htmlFor="professional"
              onClick={() => {
                handelClick(2);
              }}
              className={`${styles.selection} ${
                id === 2 && `${styles.active}`
              }`}
            >
              Professional
            </label>
          </div>
        </div>

        <div className={`${styles.description}`}>
          <label className={`${styles.itemLabel}`}>
            <p className={`${styles.itemTitle}`}>Email</p>
            <input
              type="email"
              name="email"
              className={`${styles.itemInput}`}
              placeholder="Your Email"
              required
            />
          </label>
          <label className={`${styles.itemLabel}`}>
            <p className={`${styles.itemTitle}`}>First name</p>
            <input
              type="text"
              name="firtName"
              className={`${styles.itemInput}`}
              placeholder="First name"
              required
            />
          </label>
          <label className={`${styles.itemLabel}`}>
            <p className={`${styles.itemTitle}`}>Last name</p>
            <input
              type="text"
              name="lastName"
              className={`${styles.itemInput}`}
              placeholder="Last name"
              required
            />
          </label>
          <label className={`${styles.itemLabel}`}>
            <p className={`${styles.itemTitle}`} required>
              Description
            </p>
            <textarea
              placeholder=" Hello,
              I tell you for..."
              name="message"
              className={`${styles.itemInputDescription}`}
            ></textarea>
          </label>
          <div className={`${styles.itemInputDivSubmit}`}>
            <input
              type="submit"
              value="Submit"
              className={`${styles.itemInputSubmit}`}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
