import { selectTodolist } from "../../../store/todolist/todolist.selector";

const TodoViewModel = {
  list: selectTodolist,
};

export default TodoViewModel;
