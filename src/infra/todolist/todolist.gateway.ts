import {
  ListItem,
  ListItemId,
} from "../../interface/store/todolist/todolist.reducer";
import { TodolistGatewayInterface } from "./todolist.gateway.interface";
import FirebaseFirestore, {
  FIREBASE_KEY,
} from "../services/firebase.firestore";
import { v4 as uuidv4 } from "uuid";

export class TodolistGatewayImpl implements TodolistGatewayInterface {
  repository = new FirebaseFirestore();

  async getTodo(): Promise<ListItem[]> {
    return await this.repository.getCollection(FIREBASE_KEY.LIST);
  }

  async addItem(itemValue: string): Promise<ListItem> {
    const uuid = uuidv4();
    const item = { id: uuid, value: itemValue };

    await this.repository.store({
      itemId: item.id,
      item: item,
      collectionKey: FIREBASE_KEY.LIST,
    });

    return item;
  }

  async deleteItem(itemId: ListItemId): Promise<void> {
    await this.repository.delete({
      itemId: itemId,
      collectionKey: FIREBASE_KEY.LIST,
    });
  }
}
