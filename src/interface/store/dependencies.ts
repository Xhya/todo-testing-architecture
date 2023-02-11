import { TodolistGateway } from "./store.config";

export class TodolistGatewayMock implements TodolistGateway {
  addItem(itemValue: string) {
    return {
      id: "1",
      value: itemValue,
    };
  }
}
