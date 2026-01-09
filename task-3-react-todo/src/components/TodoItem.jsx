import { useState } from "react";

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, text);
    setIsEditing(false);
  };

  return (
      <li className="todo-item">
      {isEditing ? (
          <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
          <>
          {/* <span className="task-number">{index}.</span> */}
          <span>{todo.text}</span>
          <div className="buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
