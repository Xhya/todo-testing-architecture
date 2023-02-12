import {
  ListItem,
  ListItemValue,
} from "../../interface/store/todolist/todolist.reducer";

export interface TodolistGatewayInterface {
  addItem: (itemValue: ListItemValue) => ListItem;
}
