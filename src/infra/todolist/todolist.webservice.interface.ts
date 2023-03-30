import { ListItem, ListItemValue, Todo } from "../../store/todolist.reducer";

export interface TodolistWebserviceInterface {
  addItem: (itemValue: ListItemValue) => Promise<ListItem>;
  getTodo: () => Promise<Todo>;
}
