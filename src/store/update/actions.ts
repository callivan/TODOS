import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { TodoType } from "../../server/types";
import { getRequest } from "../get/actions";
import { InitialState } from "../rootTypes";
import { TODO_UPDATE, UpdateActionType } from "./types";

export const todoUpdate: ActionCreator<UpdateActionType> = () => ({
  type: TODO_UPDATE,
});

export const updateRequest =
  (todo: TodoType): ThunkAction<void, InitialState, any, UpdateActionType> =>
  async (dispatch) => {
    try {
      await fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(todo),
      });

      dispatch(todoUpdate());
      dispatch(getRequest("http://localhost:3001/todos"));
    } catch (error: any) {}
  };
