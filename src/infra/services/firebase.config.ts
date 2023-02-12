import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBAP7RWjqMy4EaZgMmGco0217DbB9e_Vok",
    authDomain: "todolist-30464.firebaseapp.com",
    projectId: "todolist-30464",
    storageBucket: "todolist-30464.appspot.com",
    messagingSenderId: "1061444525783",
    appId: "1:1061444525783:web:afc890439ec5e67baada92"
  };

export const firebaseApp = initializeApp(firebaseConfig);
