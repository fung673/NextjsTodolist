import styles from './styles/todo.module.css'
function Todo({ todo, onClick }) {
 return (
  <li className={styles.todolist}>
   {todo.name}
   <input type="checkbox"
    onClick={onClick}
    checked={todo.done ? 'checked' : ''} className={styles.checkbox}>
   </input>
  </li>


 )

}

export default Todo