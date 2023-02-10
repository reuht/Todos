import React from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import TotalTodo from "./Components/TotalTodo";
import { useState } from "react";


function App() {

  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  return (
    <div className="container is-max-widescreen">
      <Nav />
      <br/>
        <TotalTodo/>
      <br/>
      <Search
        task = {task}
        setTask = {setTask}
      />
    </div>
  );
}

export default App;
