import { TodolistWebserviceInterface } from "./todolist.webservice.interface";
import FirebaseFirestore, {
  FIREBASE_KEY,
} from "../services/firebase.firestore";
import { v4 as uuidv4 } from "uuid";
import { ListItem, Todo } from "../../store/todolist.reducer";

export class TodolistWebservice implements TodolistWebserviceInterface {
  repository = new FirebaseFirestore();

  async getTodo(): Promise<Todo> {
    return await this.repository.getCollection(FIREBASE_KEY.LIST) as Todo;
  }

  async addItem(itemValue: string): Promise<ListItem> {
    const uuid = Math.floor(Math.random() * 1000000)
    const item = { id: uuid.toString(), text: itemValue, checked: false };

    await this.repository.store({
      itemId: item.id,
      item: item,
      collectionKey: FIREBASE_KEY.LIST,
    });

    return item;
  }
}
