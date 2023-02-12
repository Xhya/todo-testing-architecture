import { TodolistGatewayInterface } from "./todolist.gateway.interface";

export class TodolistGatewayImpl implements TodolistGatewayInterface {
  addItem(itemValue: string) {    
    return {
      id: "",
      value: itemValue,
    };
  }
}
