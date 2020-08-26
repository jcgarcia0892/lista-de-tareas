import { crearTodoHtml } from './js/componentes.js';
import { Todo, TodoList } from './classes';
import './styles.css';


export const todoList = new TodoList();


//todoList.todos.forEach( todo =>  crearTodoHtml( todo ));
//Son iguales
todoList.todos.forEach( crearTodoHtml );

console.log(todoList.todos);


