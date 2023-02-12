import TodolistSlice from "./todolist.reducer";

export const { 
    setTodolist: setTodolistAction,
    addItem: addItemAction,
    deleteItem: deleteItemAction,
} = TodolistSlice.actions;
