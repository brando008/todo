import { todo } from "./todo.js";

//This is meant to organize the todos into a single list
//Functions: put a title, edit the todos, add a todo
function list() {
  let listInfo = {
    title: "",
    edit: false,
  };
  let todos = [];

  const getTitle = () => listInfo.title;
  const setTitle = (newTitle) => (listInfo.title = newTitle);

  const toggleEdit = () => (listInfo.edit = !listInfo.edit);

  const addTodo = (title, description) => {
    const newTodo = todo();
    newTodo.setTitle(title, description);
    todos.push(newTodo);
  };

  const getTodos = () => todos;

  return {
    getTitle,
    setTitle,
    toggleEdit,
    addTodo,
    getTodos,
  };
}

export { list };
