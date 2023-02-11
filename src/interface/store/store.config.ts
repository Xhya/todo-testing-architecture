import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice from "./todolist/todolist.reducer";

export const store = configureStore({
  reducer: { todolist: TodolistSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {},
      },
    }),
});

// export interface Dependencies {
//   blogGateway: BlogGateway
// }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
