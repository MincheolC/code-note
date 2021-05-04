import React from "react";
import CounterContainer from "./components/Counter";
import TodosContainer from "./components/Todos";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
