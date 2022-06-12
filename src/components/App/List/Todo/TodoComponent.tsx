import React from "react";
import styles from "./todo.scss";

interface ITodoComponentProps {
  name: string;
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TodoComponent({ name, done, setDone }: ITodoComponentProps) {
  return (
    <div className={styles["todo"]}>
      <label className={styles["todo__label"]}>
        <input
          className={styles["todo__checkbox"]}
          type="checkbox"
          defaultChecked={done}
          onClick={() => setDone(!done)}
        />
        <span className={styles["todo__custom-checkbox"]}></span>
        <span className={styles["todo__label-name"]}>{name}</span>
      </label>
    </div>
  );
}
