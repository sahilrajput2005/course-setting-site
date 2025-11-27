import "./App.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "Hit the gym regularly",
      done: false,
    },
  ]);
  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
      newArray.push({
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        done: false,
      });
      setTodos(newArray);
    }
  }

  return (
    <main>
      <h1>TODOS</h1>
      <input id="title" type="text" placeholder="title" />
      <input id="description" type="text" placeholder="description" />
      <br></br>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={() => setTodos([])}>Clear Todo</button>
      {JSON.stringify(todos)}
    </main>
  );
}
function Todos(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
      <h2> {props.done ? "Done" : "Not Done"}</h2>
    </div>
  );
}
