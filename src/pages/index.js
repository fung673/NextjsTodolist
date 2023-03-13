import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [todos, setTodos] = useState([{ name: "Default", done: true }]);
  const [newTodos, setNewTodos] = useState("");

  function handleAdd() {
    if (newTodos === "") {
      return -1
    }
    else {
      setTodos((prev) => [...prev, { name: newTodos, done: false }]);
      setNewTodos("");
    }
  }

  function handleChange(event) {
    setNewTodos(event.target.value);
  }

  const toggleDone = (e, index) => {
    const newToggle = todos.map((item, i) => {
      if (i !== index) {
        return item;
      }
      return { name: item.name, done: !item.done };
    });
    setTodos(newToggle);
  };

  const totalRemaining = todos.filter((item) => {
    return item.done === false;
  }).length;

  console.log(todos)
  return (

    <div>
      {todos.map((item, i) => {
        return (
          <div>
            {item.name}
            <input
              type="checkbox"
              checked={item.done ? "checked" : ""}
              onClick={(e) => {
                toggleDone(e, i);
              }}
            ></input>
          </div>
        );
      })}
      <input onChange={handleChange} value={newTodos} />
      <button onClick={handleAdd}>add</button>
      <div>Total Remaining:{totalRemaining}</div>
    </div>
  );
}

export default Home;
