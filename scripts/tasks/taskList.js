import { useTasks, deleteTask } from "./taskProvider.js";
import { taskComponent } from "./task.js";

const targetElement = document.querySelector(".task-container");
const eventHub = document.querySelector(".container");

export const taskList = () => {
  const tasks = useTasks();
  render(tasks);
  taskListHandler();
};

const taskListHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "taskCheckbox") {
      clickEvent.target.className = "taskCheckboxCompleted";
      deleteTask(clickEvent.target.id);
    }
  });
};

const render = (tasks) => {
  targetElement.innerHTML = `
  <div class="todo-list-container">
  <h2 class="todo-list-header">To do:</h2>
  ${tasks
    .map((task) => {
      return taskComponent(task);
    })
    .join("")}
  </div>
  `;
};
