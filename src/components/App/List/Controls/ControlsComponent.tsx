import React from "react";

import styles from "./controls.scss";

export function ControlsComponent() {
  return (
    <>
      <li className={styles["controls__item"]}>
        <button
          className={[styles["controls__btn"], "active"].join(" ")}
          data-all
        >
          All
        </button>
      </li>
      <li className={styles["controls__item"]}>
        <button className={styles["controls__btn"]} data-active>
          Active
        </button>
      </li>
      <li className={styles["controls__item"]}>
        <button className={styles["controls__btn"]} data-completed>
          Completed
        </button>
      </li>
      <li className={styles["controls__item"]}>
        <button className={styles["controls__btn"]} data-clear>
          Clear completed
        </button>
      </li>
    </>
  );
}
