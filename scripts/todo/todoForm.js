import { addTodo } from "./todoProvider.js";
import { getTodo } from "./todoProvider.js";
import { todoList } from "./todoList.js";

const targetElement = document.querySelector(".todo-form-container");
const eventHub = document.querySelector(".container");

export const todoForm = () => {
  todoFormHandler();
  render();
};

const render = () => {
  targetElement.innerHTML = `
    <input type="hidden" id="todo-form-id">
    <input type="text" placeholder="I need to..." id="todo-form-input">
    <button id="todo-form-submit">Add todo</button>`;
};

const todoFormHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "todo-form-submit") {
      console.log("submitting new todo");
      const newTodo = {
        description: document.querySelector("#todo-form-input").value,
      };
      addTodo(newTodo).then(getTodo).then(todoList).then(todoFormReset);
    }
  });
};

const todoFormReset = () => {
  document.querySelector("#todo-form-input").value = "";
};
