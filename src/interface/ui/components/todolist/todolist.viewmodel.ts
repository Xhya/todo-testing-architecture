import { ListItem } from "../../../store/todolist/todolist.reducer";
import { selectTodolist } from "../../../store/todolist/todolist.selector";

const TodoViewModel = {
  list: selectTodolist,
  getItemValue: (item: ListItem) => item.value
};

export default TodoViewModel;
