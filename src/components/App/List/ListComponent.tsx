import React from "react";
import { DatabaseType } from "../../../server/types";
import { Controls } from "./Controls";
import { Todo } from "./Todo";

import styles from "./list.scss";

interface IListComponentProps {
  todos: DatabaseType;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  addBtnRef: React.MutableRefObject<null>;
}

export function ListComponent({
  todos,
  value,
  setValue,
  addBtnRef,
}: IListComponentProps) {
  return (
    <div className={styles["todos"]}>
      <form className={styles["todos__form"]} autoComplete="off">
        <input
          className={styles["todos__input"]}
          type="text"
          value={value}
          placeholder="What needs to be done?"
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          className={styles["todos__btn"]}
          ref={addBtnRef}
          disabled={!value.trim().length ? true : false}
        >
          Add
        </button>
      </form>
      <ul className={styles["todos__list"]}>
        {todos?.length ? (
          createTodo(todos)
        ) : (
          <li className={styles["todos__started-item"]}>GET STARTED</li>
        )}
      </ul>
      <div className={styles["todos__controls-wrapper"]}>
        <div className={styles["todos__left-counter"]}>
          <span className={styles["todos__conunter"]}>
            {todos ? todos.length : 0}
          </span>
          <span className={styles["todos__left-text"]}>items left</span>
        </div>
        <Controls />
      </div>
    </div>
  );
}

function createTodo(todos: DatabaseType) {
  if (!todos) return null;

  return todos.map((todo) => {
    return (
      <li key={String(todo.id)} className={styles["todos__item"]}>
        <Todo id={todo.id} name={todo.name} done={todo.done} />
      </li>
    );
  });
}
