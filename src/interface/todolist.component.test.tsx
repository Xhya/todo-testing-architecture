import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { TodolistWebserviceInterface } from "../infra/todolist/todolist.webservice.interface";
import { TodolistWebserviceMock } from "../infra/todolist/todolist.webservice.mock";
import {
  createStore,
  ReduxStore,
  RootState,
} from "../store/store.config";
import Todolist from "./Todolist.component";

describe("Todolist Component", () => {
  let store: ReduxStore;
  let todolistWebserviceMock: TodolistWebserviceInterface;
  let initialState: RootState;

  beforeEach(() => {
    todolistWebserviceMock = new TodolistWebserviceMock();
    store = createStore({ todolistWebservice: todolistWebserviceMock });
    initialState = store.getState();
  });

  it("displays list", async () => {
    render(
      <Provider store={store}>
        <Todolist />
      </Provider>
    );

    expect(await waitFor(() => screen.getByText("Tomate"))).toBeInTheDocument();
  });
});
