import React from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import TotalTodo from "./Components/TotalTodo";
import ListTask from "./Components/ListTask";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Comprar chocolate",
      pending: true,
    },
    {
      task: "Terminar tareas pendientes",
      pending: true,
    },
  ]);

  const [task, setTask] = useState("");

  return (
    <>
      <Nav />
      <div className="container is-max-widescreen">
        <br />
        <TotalTodo />
        <br />
        <Search task={task} setTask={setTask} />
        <br />
        <ListTask todos={todos} />
      </div>
    </>
  );
}

export default App;
