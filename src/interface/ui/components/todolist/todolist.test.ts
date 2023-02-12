import { TodolistGatewayInterface } from "../../../../infra/todolist/todolist.gateway.interface";
import { TodolistGatewayMock } from "../../../../infra/todolist/todolist.gateway.mock";
import {
  createStore,
  ReduxStore,
  RootState,
} from "../../../store/store.config";
import { addItem, deleteItem, refreshTodolist } from "./todolist.dispatcher";
import TodoViewModel from "./todolist.viewmodel";

describe("todolist tests", () => {
  let store: ReduxStore;
  let todolistGatewayMock: TodolistGatewayInterface;
  let initialState: RootState;

  beforeEach(() => {
    todolistGatewayMock = new TodolistGatewayMock();
    store = createStore({ todolistGateway: todolistGatewayMock });
    initialState = store.getState();
  });

  test("should init", () => {
    expect(store.getState()).toEqual({
      ...initialState,
    });
  });

  test("should get todolist", async () => {
    await store.dispatch(refreshTodolist());
    expect(getItemValueList()).toEqual(["Tomate"]);
  });


  test("should add item", async () => {
    await store.dispatch(addItem("Toto"));
    expect(getItemValueList()).toEqual(["Toto"]);
    await store.dispatch(addItem("Titi"));
    expect(getItemValueList()).toEqual(["Toto", "Titi"]);
    await store.dispatch(addItem("Tata"));
    expect(getItemValueList()).toEqual(["Toto", "Titi", "Tata"]);
  });

  test("should delete item", async () => {
    await store.dispatch(refreshTodolist());
    await store.dispatch(addItem("Toto"));
    await store.dispatch(deleteItem("1"));
    expect(getItemValueList()).toEqual(["Tomate"]);
  });

  const getItemValueList = () =>
    TodoViewModel.list(store.getState()).map(TodoViewModel.getItemValue);
});
