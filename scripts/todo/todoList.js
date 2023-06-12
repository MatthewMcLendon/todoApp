import { useTodo } from "./todoProvider.js";
import { todoComponent } from "./todo.js";

const targetElement = document.querySelector(".todo-container");

export const todoList = () => {
  const todos = useTodo();

  targetElement.innerHTML = todos.map((todo) => {
    return todoComponent(todo);
  });
};
