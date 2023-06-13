import { useTasks, updateTask } from "./taskProvider.js";
import { taskComponent } from "./task.js";

const targetElement = document.querySelector(".task-container");
const eventHub = document.querySelector(".container");
let tasks = [];

export const taskList = () => {
  tasks = useTasks();
  render(tasks);
  taskListHandler();
};

const taskListHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "taskCheckbox") {
      clickEvent.target.className = "taskCheckboxCompleted";
      const updatedTask = tasks.find(
        (task) => task.id.toString() === clickEvent.target.id
      );
      updatedTask.completed = true;
      updateTask(updatedTask);
      // change delete to an update route. Will bulk delete on button press
    }
  });
};

const render = (tasks) => {
  targetElement.innerHTML = `
  <div class="todo-list-container">
  ${tasks
    .map((task) => {
      return taskComponent(task);
    })
    .join("")}
  </div>
  `;
};
