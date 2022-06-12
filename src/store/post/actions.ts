import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { DatabaseType } from "../../server/types";
import { getRequest } from "../get/actions";
import { InitialState } from "../rootTypes";
import { AddActionType, TODO_ADD } from "./types";

export const todoAdd: ActionCreator<AddActionType> = () => ({
  type: TODO_ADD,
});

export const addRequest =
  (name: string): ThunkAction<void, InitialState, any, AddActionType> =>
  async (dispatch, getData) => {
    try {
      const todo = { id: generatorId(getData().todos), name, done: false };

      await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(todo),
      });

      dispatch(todoAdd());
      dispatch(getRequest("http://localhost:3001/todos"));
    } catch (error: any) {}
  };

const generatorId = (todos: DatabaseType) => {
  if (!todos || !todos.length) return 1;
  const lastId = todos.reduce((acc, todo) => {
    acc = acc < todo.id ? todo.id : acc;
    return acc;
  }, 1);

  return lastId + 1;
};
