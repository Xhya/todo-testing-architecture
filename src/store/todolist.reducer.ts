import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListItemId = string;
export type ListItemValue = string;
export interface ListItem {
  id: ListItemId;
  text: ListItemValue;
  checked: boolean;
}
export type Todo ={ [id: string]: ListItem };

export interface TodolistI {
  list: Todo;
  searchedValue?: string;
}

const initialState: TodolistI = {
  list: {},
};

export const accessList: (list: any) => ListItem[] = (list) => Object.values(list);

const TodolistSlice = createSlice({
  name: "Todolist",
  initialState: initialState,
  reducers: {
    setTodolist(state: TodolistI, action: PayloadAction<{ todolist: Todo }>) {
      state.list = action.payload.todolist;
    },
    addItem(
      state: TodolistI,
      action: PayloadAction<{ itemValue: ListItemValue; id: ListItemId }>
    ) {
      state.list[action.payload.id] = ({
        id: action.payload.id,
        text: action.payload.itemValue,
        checked: false,
      });
    },
  },
});

export default TodolistSlice;
