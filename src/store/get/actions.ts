import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { DatabaseType } from "../../server/types";
import { InitialState } from "../rootTypes";
import {
  TodosRequestAction,
  TODOS_REQUEST,
  TodosErrorAction,
  TODOS_REQUEST_ERROR,
  TodosSuccessAction,
  TODOS_REQUEST_SUCCESS,
  GetActionsType,
} from "./types";

export const todosRequest: ActionCreator<TodosRequestAction> = () => ({
  type: TODOS_REQUEST,
});

export const todosRequestError: ActionCreator<TodosErrorAction> = (
  error: string
) => ({
  type: TODOS_REQUEST_ERROR,
  error,
});

export const todosRequestSuccess: ActionCreator<TodosSuccessAction> = (
  todos: DatabaseType
) => ({
  type: TODOS_REQUEST_SUCCESS,
  todos,
});

export const getRequest =
  (url: string): ThunkAction<void, InitialState, any, GetActionsType> =>
  async (dispatch) => {
    try {
      dispatch(todosRequest());

      const request = await fetch(url);
      const response = await request.json();

      dispatch(todosRequestSuccess(response));
    } catch (error: any) {
      dispatch(todosRequestError(error.message));
    }
  };
