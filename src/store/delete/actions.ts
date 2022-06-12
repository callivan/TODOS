import { ThunkAction } from "@reduxjs/toolkit";
import { ActionCreator } from "redux";
import { DatabaseType } from "../../server/types";
import { getRequest } from "../get/actions";
import { InitialState } from "../rootTypes";
import { DeleteActionType, TODO_DELET } from "./types";

export const todoDelete: ActionCreator<DeleteActionType> = () => ({
  type: TODO_DELET,
});

export const deleteRequest =
  (): ThunkAction<void, InitialState, any, DeleteActionType> =>
  async (dispatch) => {
    try {
      const request = await fetch("http://localhost:3001/todos?done=true");
      const response: DatabaseType = await request.json();

      if (response) {
        const promises = response.map((todo) =>
          fetch(`http://localhost:3001/todos/${todo.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(todo),
          })
        );
        await Promise.all(promises);
        dispatch(todoDelete());
        dispatch(getRequest("http://localhost:3001/todos"));
      }
    } catch (error: any) {}
  };
