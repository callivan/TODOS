import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DatabaseType } from "../../../server/types";
import { addRequest } from "../../../store/post/actions";
import { AddActionType } from "../../../store/post/types";
import { InitialState } from "../../../store/rootTypes";
import { showContainer } from "./animations/showContainer";
import { showCounter } from "./animations/showCounter";
import { showForm } from "./animations/showForm";
import { ListComponent } from "./ListComponent";

export function List() {
  const todos = useSelector<InitialState, DatabaseType>((state) => state.todos);
  const dispatch =
    useDispatch<ThunkDispatch<InitialState, any, AddActionType>>();
  const [value, setValue] = useState("");
  const addButtonRef = useRef<any>(null);

  useEffect(() => {
    function HandleClickAddTodo(e: MouseEvent) {
      e.preventDefault();
      dispatch(addRequest(value));
      setValue("");
    }

    if (!(addButtonRef.current instanceof HTMLButtonElement)) return;

    addButtonRef.current.addEventListener("click", HandleClickAddTodo);

    return () => {
      addButtonRef.current.removeEventListener("click", HandleClickAddTodo);
    };
  }, [value]);

  useEffect(() => {
    showContainer();
    showForm();
    showCounter();
  }, []);

  return (
    <ListComponent
      todos={todos}
      value={value}
      setValue={setValue}
      addBtnRef={addButtonRef}
    />
  );
}
