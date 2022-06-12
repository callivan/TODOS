import { DatabaseType } from "../server/types";

export type InitialState = {
  loading: boolean;
  todos: DatabaseType;
  error: string | null;
};
