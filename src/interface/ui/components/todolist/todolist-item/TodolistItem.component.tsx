import { useAppDispatch } from "../../../../store/store.config";
import { ListItem } from "../../../../store/todolist/todolist.reducer";
import { deleteItem } from "../todolist.dispatcher";
import TodoViewModel from "../todolist.viewmodel";

interface TodolistItemParams {
  item: ListItem;
}

function TodolistItem({ item }: TodolistItemParams) {
  const dispatch = useAppDispatch();

  const onClickDelete = () => {
    dispatch(deleteItem(item.id))
  }

  return (
    <>
      <div>{TodoViewModel.getItemValue(item)}</div>
      <div onClick={onClickDelete}>x</div>
    </>
  );
}

export default TodolistItem;
