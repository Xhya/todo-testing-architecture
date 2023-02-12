import {
  getFirestore,
  setDoc,
  doc,
  getDoc as firebaseGetDoc,
  getDocs,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { firebaseApp } from "./firebase.config";

export enum FIREBASE_KEY {
  LIST = "list",
}

export interface FirebaseTodoItemI {
  id: string;
  value: string;
}

export default class FirebaseFirestore {
  db = getFirestore(firebaseApp);

  async getCollection(collectionKey: FIREBASE_KEY): Promise<any[]> {
    let items: any[] = [];

    const docs = await getDocs(collection(this.db, collectionKey));

    for (const document of docs.docs) {
      const item = document.data();
      items.push(item);
    }
    return items;
  }

  async getDoc(
    itemId: string,
    collectionKey: FIREBASE_KEY
  ): Promise<FirebaseTodoItemI> {
    const docRef = doc(this.db, collectionKey, itemId);
    const docSnap = await firebaseGetDoc(docRef);
    return docSnap.data() as FirebaseTodoItemI;
  }

  async store({
    itemId,
    item,
    collectionKey,
  }: {
    itemId: string;
    item: any;
    collectionKey: FIREBASE_KEY;
  }): Promise<void> {
    return setDoc(doc(this.db, collectionKey, itemId), item);
  }

  async update(
    itemId: string,
    item: any,
    collectionKey: FIREBASE_KEY
  ): Promise<void> {
    const docRef = doc(this.db, collectionKey, itemId);
    await setDoc(docRef, item, { merge: true });
  }

  async delete({
    itemId,
    collectionKey,
  }: {
    itemId: string;
    collectionKey: FIREBASE_KEY;
  }): Promise<void> {
    await deleteDoc(doc(this.db, collectionKey, itemId));
  }
}
