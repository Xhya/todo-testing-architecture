import { ThunkResult } from "../../../store/store.config";
import {
  addItemAction,
  deleteItemAction,
} from "../../../store/todolist/todolist.actions";
import {
  ListItemId,
  ListItemValue,
} from "../../../store/todolist/todolist.reducer";

export const addItem =
  (itemValue: ListItemValue): ThunkResult<Promise<void>> =>
  async (dispatch: any, getState: any, { todolistGateway }) => {
    const item = await todolistGateway.addItem(itemValue);
    dispatch(addItemAction({ itemValue, id: item.id }));
  };

export const deleteItem =
  (itemId: ListItemId) => async (dispatch: any, getState: any) => {
    dispatch(deleteItemAction({ itemId }));
  };
