import React, { useState } from "react";

const TodoItem = React.memo(function TodoItem(props) {
  const { todo, onToggle, onRemove } = props;
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>x</button>
    </li>
  );
});

const TodoList = React.memo(function TodoList(props) {
  const { todos, onToggle, onRemove } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
});

function Todos(props) {
  const { todos, onCreate, onToggle, onRemove } = props;
  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          placeholder={"할 일을 입력하시오"}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}

export default Todos;
