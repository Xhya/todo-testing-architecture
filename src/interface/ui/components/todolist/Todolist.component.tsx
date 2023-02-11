import TodolistItem from "./todolist-item/TodolistItem.component";
import { useSelector } from "react-redux";
import TodoViewModel from "./todolist.viewmodel";

function Todolist() {
  const list = useSelector(TodoViewModel.list);
  
  const uiList = list?.map((item, index) => (
    <TodolistItem item={item} key={index} />
  ));

  return <>{uiList}</>;
}

export default Todolist;
