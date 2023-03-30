import { ThunkResult } from "../store/store.config";
import {
  addItemAction,
  setTodolistAction
} from "../store/todolist.actions";
import { ListItemValue } from "../store/todolist.reducer";

export const refreshTodolist =
  (): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistWebservice }) => {
    const todolist = await todolistWebservice.getTodo();
    dispatch(setTodolistAction({ todolist }));
  };

export const addItem =
  (itemValue: ListItemValue): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistWebservice }) => {
    const item = await todolistWebservice.addItem(itemValue);
    dispatch(addItemAction({ itemValue, id: item.id }));
  };
