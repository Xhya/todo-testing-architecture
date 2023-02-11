import { RootState } from "../store.config";

export const selectTodolist = (state: RootState) => state.todolist.list;
