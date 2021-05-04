import React, { useReducer, useContext, createContext, useRef } from 'react';
import produce from 'immer';

const initialState = {
  todos: [
    {
      id: 1,
      text: '프로젝트 생성하기',
      done: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true,
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false,
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false,
    },
  ],
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return produce(state, (draftState) => {
        draftState.todos.push(action.todo);
      });
    case 'REMOVE':
      return produce(state, (draftState) => {
        const index = draftState.todos.findIndex(
          (todo) => todo.id === action.id,
        );
        draftState.todos.splice(index, 1);
      });
    case 'TOGGLE':
      return produce(state, (draftState) => {
        const todo = draftState.todos.find((todo) => todo.id === action.id);
        todo.done = !todo.done;
      });
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function checkContext(context) {
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoState() {
  return checkContext(useContext(TodoStateContext));
}

export function useTodoDispatch() {
  return checkContext(useContext(TodoDispatchContext));
}

export function useTodoNextId() {
  return checkContext(useContext(TodoNextIdContext));
}
