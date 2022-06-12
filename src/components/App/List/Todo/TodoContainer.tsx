import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { InitialState } from "../../../../store/rootTypes";
import { updateRequest } from "../../../../store/update/actions";
import { UpdateActionType } from "../../../../store/update/types";
import { showTodo } from "./animatios/show";
import { TodoComponent } from "./TodoComponent";

interface ITodoProps {
  id: number;
  name: string;
  done: boolean;
}

export function Todo({ id, name, done }: ITodoProps) {
  const dispatch =
    useDispatch<ThunkDispatch<InitialState, any, UpdateActionType>>();
  const [isDone, setDone] = useState(done);
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    isFirstRender
      ? setFirstRender(false)
      : dispatch(updateRequest({ id, name, done: isDone }));
  }, [isDone]);

  useEffect(() => {
    showTodo();
  }, []);

  return <TodoComponent name={name} done={isDone} setDone={setDone} />;
}
