import { Reducer } from "@reduxjs/toolkit";
import {
  GetActionsType,
  TODOS_REQUEST_ERROR,
  TODOS_REQUEST_SUCCESS,
} from "./get/types";
import { AddActionType, TODO_ADD } from "./post/types";
import { InitialState } from "./rootTypes";
import { UpdateActionType } from "./update/types";

const initialState: InitialState = {
  loading: true,
  todos: null,
  error: null,
};

export const rootReducer: Reducer<
  InitialState,
  GetActionsType | AddActionType | UpdateActionType
> = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_REQUEST_ERROR:
      return { ...state, error: action.error, loading: false };
    case TODOS_REQUEST_SUCCESS:
      return { ...state, todos: action.todos, loading: false };
    default:
      return state;
  }
};
