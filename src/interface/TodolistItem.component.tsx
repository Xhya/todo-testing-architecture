import { ListItem } from "../store/todolist.reducer";

interface TodolistItemParams {
  item: ListItem;
}

function TodolistItem({ item }: TodolistItemParams) {
  return (
    <div className="item">
      <div>{item.text}</div>
    </div>
  );
}

export default TodolistItem;
