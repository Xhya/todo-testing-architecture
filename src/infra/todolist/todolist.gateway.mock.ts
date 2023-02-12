import {
  ListItem,
  ListItemId,
} from "../../interface/store/todolist/todolist.reducer";
import { TodolistGatewayInterface } from "./todolist.gateway.interface";

export class TodolistGatewayMock implements TodolistGatewayInterface {
  private _id = 0;
  private _list = [
    {
      id: "100",
      value: "Tomate",
    },
  ];

  addItem(itemValue: string): Promise<ListItem> {
    this._id += 1;
    const item = {
      id: this._id.toString(),
      value: itemValue,
    };
    this._list = [...this._list, item];

    return new Promise((resolve) => {
      setTimeout(() => resolve(item), 500);
    });
  }

  getTodo(): Promise<ListItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._list), 500);
    });
  }

  deleteItem(itemId: ListItemId): Promise<void> {
    this._list = this._list.filter((i) => i.id !== itemId);
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  }
}
