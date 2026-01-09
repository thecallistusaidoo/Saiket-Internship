import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        todos.map((todo,index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index +1}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </ul>
  );
}

export default TodoList;
