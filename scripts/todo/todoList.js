import { useTodo } from "./todoProvider.js";
import { todoComponent } from "./todo.js";

const targetElement = document.querySelector(".todo-container");
const eventHub = document.querySelector(".container");

export const todoList = () => {
  const todos = useTodo();
  render(todos);
  todoListHandler();
};

const todoListHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "todoCheckbox") {
      console.log("checkbox clicked for ", clickEvent.target.id);
      clickEvent.target.className = "todoCheckboxCompleted";
    }
  });
};

const render = (todos) => {
  targetElement.innerHTML = `
  <div class="todo-list-container">
  <h2 class="todo-list-header">To do:</h2>
  ${todos
    .map((todo) => {
      return todoComponent(todo);
    })
    .join("")}
  </div>
  `;
};
