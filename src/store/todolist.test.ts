
import { TodolistWebserviceInterface } from "../infra/todolist/todolist.webservice.interface";
import { TodolistWebserviceMock } from "../infra/todolist/todolist.webservice.mock";
import { createStore, ReduxStore, RootState } from "./store.config";
import { addItem, refreshTodolist } from "../interface/todolist.dispatcher";
import TodoViewModel from "../interface/todolist.viewmodel";
import { accessList } from "./todolist.reducer";

describe("todolist tests", () => {
  let store: ReduxStore;
  let todolistWebserviceMock: TodolistWebserviceInterface;
  let initialState: RootState;

  beforeEach(() => {
    todolistWebserviceMock = new TodolistWebserviceMock();
    store = createStore({ todolistWebservice: todolistWebserviceMock });
    initialState = store.getState();
  });
  
  it("should get todolist", async () => {
    await store.dispatch(refreshTodolist());
    expect(getItemValueList()).toEqual(["Tomate"]);
  });


  it("should add item", async () => {
    await store.dispatch(addItem("Salade"));
    expect(getItemValueList()).toEqual(["Salade"]);
    await store.dispatch(addItem("Tomate"));
    expect(getItemValueList()).toEqual(["Salade", "Tomate"]);
    await store.dispatch(addItem("Oignon"));
    expect(getItemValueList()).toEqual(["Salade", "Tomate", "Oignon"]);
  });

  const getItemValueList = () =>
    accessList(TodoViewModel.list(store.getState())).map(item => item.text);
});
