import { TodolistGatewayMock } from "../../../store/dependencies";
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
      store.dispatch(addItem("Titi"));
      expect(getItemValueList()).toEqual(["Toto", "Titi"]);
      store.dispatch(addItem("Tata"));
      expect(getItemValueList()).toEqual(["Toto", "Titi", "Tata"]);
    });

  test("should delete item", () => {
    store.dispatch(addItem("Toto"));
    // store.dispatch(addItem("Tata"));
    // store.dispatch(deleteItem(mockUUID1));

    //expect(getItemValueList()).toEqual(["Tata"]);
  });

  const getItemValueList = () =>
    TodoViewModel.list(store.getState()).map(TodoViewModel.getItemValue);
});
