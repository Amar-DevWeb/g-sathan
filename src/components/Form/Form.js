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
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
