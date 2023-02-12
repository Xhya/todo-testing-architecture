import { TodolistGatewayInterface } from "./todolist.gateway.interface";

export class TodolistGatewayMock implements TodolistGatewayInterface {
  private _id = 0;

  addItem(itemValue: string) {
    this._id += 1;
    return {
      id: this._id.toString(),
      value: itemValue,
    };
  }
}
