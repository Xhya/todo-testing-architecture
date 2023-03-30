import { RootState } from "./store.config";

export const selectTodolist = (state: RootState) => {
  return state.todolist.list;
};
