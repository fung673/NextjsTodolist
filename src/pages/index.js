import React from "react";
import { useState, useEffect } from "react";
import Todo from "@/todo";
import Head from "next/head";
import styles from '../styles/index.module.css'

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
      <Head><title>TodoList</title></Head>
      <div className={styles.topBar}>
        <p className={styles.topic}>What you gonna do today?🚀</p>
      </div>
      <div className={styles.body}>
        <ul className={styles.todolist}>{todos.map((item, i) => {
          return (<Todo todo={item} onClick={(e) => toggleDone(e, i)}></Todo>
          );
        })}</ul>
        <div><input onChange={handleChange} value={newTodos} />
          <button onClick={handleAdd}>add</button></div>
        <div>Total Remaining:{totalRemaining}</div>
      </div>
    </div>
  );
}

export default Home;
