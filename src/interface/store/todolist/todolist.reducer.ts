import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListItemId = string;
export type ListItemValue = string;
export interface ListItem {
  id: ListItemId;
  value: ListItemValue;
}

export interface TodolistI {
  list: ListItem[];
}

const initialState: TodolistI = {
  list: [],
};

const TodolistSlice = createSlice({
  name: "Todolist",
  initialState: initialState,
  reducers: {
    addItem(
      state: TodolistI,
      action: PayloadAction<{ itemValue: ListItemValue; id: ListItemId }>
    ) {
      state.list.push({
        id: action.payload.id,
        value: action.payload.itemValue,
      });
    },
    deleteItem(
      state: TodolistI,
      action: PayloadAction<{ itemId: ListItemId }>
    ) {      
      state.list = state.list.filter(
        (item) => item.id !== action.payload.itemId
      );
    },
  },
});

export default TodolistSlice;
