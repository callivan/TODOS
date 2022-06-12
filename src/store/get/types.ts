import { DatabaseType } from "../../server/types";

export const TODOS_REQUEST = "TODOS_REQUEST";
export const TODOS_REQUEST_ERROR = "TODOS_REQUEST_ERROR";
export const TODOS_REQUEST_SUCCESS = "TODOS_REQUEST_SUCCESS";

export type TodosRequestAction = {
  type: typeof TODOS_REQUEST;
};

export type TodosErrorAction = {
  type: typeof TODOS_REQUEST_ERROR;
  error: string;
};

export type TodosSuccessAction = {
  type: typeof TODOS_REQUEST_SUCCESS;
  todos: DatabaseType;
};

export type GetActionsType =
  | TodosRequestAction
  | TodosErrorAction
  | TodosSuccessAction;
