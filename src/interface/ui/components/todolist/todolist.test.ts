import { TodolistGatewayMock } from "../../../../infra/gateways/todolistGatewayMock";
import {
  createStore,
  ReduxStore,
  RootState,
  TodolistGateway,
} from "../../../store/store.config";
import { addItem, deleteItem } from "./todolist.dispatcher";
import TodoViewModel from "./todolist.viewmodel";

describe("todolist tests", () => {
  let store: ReduxStore;
  let todolistGatewayMock: TodolistGateway;
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

    test("should add item", async () => {
      await store.dispatch(addItem("Toto"));
      expect(getItemValueList()).toEqual(["Toto"]);
      await store.dispatch(addItem("Titi"));
      expect(getItemValueList()).toEqual(["Toto", "Titi"]);
      await store.dispatch(addItem("Tata"));
      expect(getItemValueList()).toEqual(["Toto", "Titi", "Tata"]);
    });

  test("should delete item", async () => {
    await store.dispatch(addItem("Toto"));
    await store.dispatch(addItem("Tata"));
    await store.dispatch(deleteItem("1"));
    expect(getItemValueList()).toEqual(["Tata"]);
  });

  const getItemValueList = () =>
    TodoViewModel.list(store.getState()).map(TodoViewModel.getItemValue);
});
