import { ListItem, Todo } from "../../store/todolist.reducer";
import { TodolistWebserviceInterface } from "./todolist.webservice.interface";

export class TodolistWebserviceMock implements TodolistWebserviceInterface {
  private _id = 0;
  private _list = {
    "100": {
      id: "100",
      text: "Tomate",
      checked: false,
    },
  };

  addItem(itemValue: string): Promise<ListItem> {
    this._id += 1;
    const item = {
      id: this._id.toString(),
      text: itemValue,
      checked: false,
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(item), 500);
    });
  }

  getTodo(): Promise<Todo> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this._list), 500);
    });
  }
}
