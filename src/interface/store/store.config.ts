import { Action, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice, {
  ListItem,
  ListItemValue,
  TodolistI,
} from "./todolist/todolist.reducer";
import { useDispatch } from "react-redux";
import { TodolistGatewayMock } from "../../infra/gateways/todolistGatewayMock";

export const createStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: { todolist: TodolistSlice.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { todolistGateway: dependencies.todolistGateway },
        },
      }),
  });

export const store = createStore({ todolistGateway: new TodolistGatewayMock() });

export interface Dependencies {
  todolistGateway: TodolistGateway;
}

export interface TodolistGateway {
  addItem: (itemValue: ListItemValue) => ListItem;
}

export type ReduxStore = Store<RootState> & {
  dispatch: ThunkDispatch<RootState, Dependencies, Action>;
};

export interface RootState {
  todolist: TodolistI;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type ThunkResult<R> = ThunkAction<R, RootState, Dependencies, Action>;
