import React, {useState} from "react";
import styles from "./Form.module.scss";

export default function Form() {
  const [id, setid] = useState(0);

  const handelClick = (index) => {
    setid(index);
  };

  return (
    <section className={`${styles.allForm}`}>
      <form className={`${styles.form}`}>
        <div className={`${styles.divSelection}`}>
          <p
            onClick={() => {
              handelClick(1);
            }}
            className={`${styles.selection} ${
              id === 2 ? "active" : `${styles.active}`
            }`}
          >
            Private
          </p>
          <p
            onClick={() => {
              handelClick(2);
            }}
            className={`${styles.selection} ${
              id === 1 ? "active" : `${styles.active}`
            }`}
          >
            Professional
          </p>
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
            <p className={`${styles.itemTitle}`}>Firt name</p>
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
