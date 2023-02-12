import {
  ListItem,
  ListItemId,
  ListItemValue,
} from "../../interface/store/todolist/todolist.reducer";

export interface TodolistGatewayInterface {
  addItem: (itemValue: ListItemValue) => Promise<ListItem>;
  getTodo: () => Promise<ListItem[]>;
  deleteItem: (itemId: ListItemId) => Promise<void>;
}
