import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "./Todos";
import { addTodo, toggleTodo, removeTodo } from "../../redux/modules/todos";

function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
  const onRemove = (id) => dispatch(removeTodo(id));

  return (
    <Todos
      todos={todos}
      onCreate={onCreate}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
}

export default TodosContainer;
