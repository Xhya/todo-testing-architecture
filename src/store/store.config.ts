import { Action, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { TodolistWebserviceInterface } from "../infra/todolist/todolist.webservice.interface";
import { TodolistWebservice } from "../infra/todolist/todolist.webservice";
import { TodolistWebserviceMock } from "../infra/todolist/todolist.webservice.mock";
import TodolistSlice, { TodolistI } from "./todolist.reducer";

export const createStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: { todolist: TodolistSlice.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { todolistWebservice: dependencies.todolistWebservice },
        },
      }),
  });

export const store = createStore({
  todolistWebservice: new TodolistWebservice(),
});

export interface Dependencies {
  todolistWebservice: TodolistWebserviceInterface;
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
