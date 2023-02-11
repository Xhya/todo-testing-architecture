import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListItem = string;

export interface TodolistI {
  list: ListItem[];
}

const initialState: TodolistI = {
  list: ["totos"],
};

const TodolistSlice = createSlice({
  name: "Todolist",
  initialState: initialState,
  reducers: {
    addItem(state: TodolistI, action: PayloadAction<{ item: string }>) {
      state.list.push(action.payload.item);
    },
  },
});

export default TodolistSlice;
