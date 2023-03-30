import { useSelector } from "react-redux";
import TodoViewModel from "./todolist.viewmodel";
import { useEffect, useState } from "react";
import {
  addItem,
  refreshTodolist,
} from "./todolist.dispatcher";
import "./todolist.scss";
import { useAppDispatch } from "../store/store.config";
import TodolistItem from "./TodolistItem.component";
import { accessList } from "../store/todolist.reducer";

function Todolist() {
  const dispatch = useAppDispatch();
  const list = useSelector(TodoViewModel.list);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(refreshTodolist());
  }, [dispatch]);

  const onClickValidate = () => {
    dispatch(addItem(input));
    setInput("");
  };

  return (
    <div className="container">
      <div className="todolist">
        <div className="todo-edition">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button onClick={onClickValidate}>Valider</button>
        </div>

        <div className="list">
          {accessList(list).map((item, index) => (
            <TodolistItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
