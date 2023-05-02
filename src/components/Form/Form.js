import React from "react";
import styles from "./Form.module.scss";

export default function Form() {
  return (
    <section className={`${styles.allForm}`}>
      <form className={`${styles.form}`}>
        <div className={`${styles.divSelection}`}>
          <p className={`${styles.selection}`}>Private</p>
          <p className={`${styles.selection}`}>Professional</p>
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
          <label>
            <p className={`${styles.itemTitle}`}>Firt name</p>
            <input
              type="text"
              name="firtName"
              className={`${styles.itemInput}`}
              placeholder="First name"
              required
            />
          </label>
          <label>
            <p className={`${styles.itemTitle}`}>Last name</p>
            <input
              type="text"
              name="lastName"
              className={`${styles.itemInput}`}
              placeholder="Last name"
              required
            />
          </label>
          <label>
            <p className={`${styles.itemTitle}`} required>
              Description
            </p>
            <textarea
              placeholder="Hello,I tell you for..."
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
