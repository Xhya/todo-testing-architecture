interface TodolistItemParams {
  item: any;
}

function TodolistItem({ item }: TodolistItemParams) {
  return <>{item}</>;
}

export default TodolistItem;
