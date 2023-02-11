import { ListItem } from "../../../../store/todolist/todolist.reducer";
import TodoViewModel from "../todolist.viewmodel";

interface TodolistItemParams {
  item: ListItem;
}

function TodolistItem({ item }: TodolistItemParams) {
  return <>{TodoViewModel.getItemValue(item)}</>;
}

export default TodolistItem;
