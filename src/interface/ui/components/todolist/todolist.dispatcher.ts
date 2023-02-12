import { ThunkResult } from "../../../store/store.config";
import {
  addItemAction,
  deleteItemAction,
  setTodolistAction,
} from "../../../store/todolist/todolist.actions";
import {
  ListItemId,
  ListItemValue,
} from "../../../store/todolist/todolist.reducer";

export const refreshTodolist =
  (): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistGateway }) => {
    const todolist = await todolistGateway.getTodo();
    dispatch(setTodolistAction({ todolist }));
  };

export const addItem =
  (itemValue: ListItemValue): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistGateway }) => {
    const item = await todolistGateway.addItem(itemValue);
    dispatch(addItemAction({ itemValue, id: item.id }));
  };

export const deleteItem =
  (itemId: ListItemId): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistGateway }) => {
    await todolistGateway.deleteItem(itemId);
    dispatch(deleteItemAction({ itemId }));
  };
