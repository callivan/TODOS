import React from "react";
import { List } from "./List";
import { Loader } from "./Loader";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";
import styles from "./app.scss";

interface IAppComponentProps {
  appShow: boolean;
}

export function AppComponent({ appShow }: IAppComponentProps) {
  return (
    <section className={styles["app"]}>
      <div className={[styles["app__container"], "container"].join(" ")}>
        <h1 className={styles["app__title"]}>todos</h1>
        {appShow && <List />}
        {!appShow && <Loader />}
      </div>
    </section>
  );
}
