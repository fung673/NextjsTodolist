import styles from './styles/todo.module.css'
import { useState } from 'react'
function Todo({ todo, onClick, todos, setTodos }) {

 function Delete() {
  const newList = [...todos].filter((a) => (a.name !== todo.name))
  setTodos(newList)
 }



 return (
  <li className={styles.todolist}>
   {todo.name}
   <div className={styles.opeartor}><input type="checkbox"
    onClick={onClick}
    checked={todo.done ? 'checked' : ''} className={styles.checkbox}>
   </input>
    <button className={styles.button} onClick={Delete}>❌</button></div>
  </li>


 )

}

export default Todo