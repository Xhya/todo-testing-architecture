import { TodolistGateway } from "../../interface/store/store.config";

export class TodolistGatewayMock implements TodolistGateway {
  private _id = 0;

  addItem(itemValue: string) {
    this._id += 1;
    return {
      id: this._id.toString(),
      value: itemValue,
    };
  }
}
