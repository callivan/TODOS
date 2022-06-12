export type TodoType = { readonly id: number; done: boolean; name: string };
export type DatabaseType = Array<TodoType> | null;
