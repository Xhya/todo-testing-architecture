import TodolistItem from "./todolist-item/TodolistItem.component";
import { useSelector } from "react-redux";
import TodoViewModel from "./todolist.viewmodel";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/store.config";
import { addItem, refreshTodolist } from "./todolist.dispatcher";

function Todolist() {
  const dispatch = useAppDispatch();
  const list = useSelector(TodoViewModel.list);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(refreshTodolist());
  }, [dispatch]);

  const uiList = list?.map((item, index) => (
    <TodolistItem item={item} key={index} />
  ));

  const onClickValidate = () => {
    dispatch(addItem(input));
    setInput("");
  };

  return (
    <>
      <div>{uiList}</div>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={onClickValidate}>Valider</button>
      </div>
    </>
  );
}

export default Todolist;
