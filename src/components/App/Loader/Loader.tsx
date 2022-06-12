import React from "react";

import styles from "./loader.scss";

export function Loader() {
  return (
    <div className={styles["loader"]}>
      <ul className={styles["loader__wrapper"]}>
        <li className={styles["loader__letter"]}>t</li>
        <li className={styles["loader__letter"]}>o</li>
        <li className={styles["loader__letter"]}>d</li>
        <li className={styles["loader__letter"]}>o</li>
        <li className={styles["loader__letter"]}>s</li>
      </ul>
    </div>
  );
}
