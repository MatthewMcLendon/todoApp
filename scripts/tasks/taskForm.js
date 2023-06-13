import { addTask, getTasks, useTasks, deleteTask } from "./taskProvider.js";
import { taskList } from "./taskList.js";

const targetElement = document.querySelector(".task-form-container");
const eventHub = document.querySelector(".container");

export const taskForm = () => {
  taskFormHandler();
  render();
};

const render = () => {
  targetElement.innerHTML = `
    <input type="hidden" id="task-form-id">
    <input type="text" placeholder="I need to..." id="task-form-input">
    <button id="task-form-submit">Add task</button>
    <button id="task-form-delete">Remove completed tasks`;
};

const taskFormHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "task-form-submit") {
      const newTask = {
        description: document.querySelector("#task-form-input").value,
        completed: false,
      };
      addTask(newTask).then(getTasks).then(taskList).then(taskFormReset);
    }

    if (clickEvent.target.id === "task-form-delete") {
      const tasks = useTasks();

      tasks.map((task) => {
        if (task.completed) {
          deleteTask(task.id);
          console.log("deleting", task.id);
        }
      });
      
      getTasks().then(taskList);
    }
  });
};

const taskFormReset = () => {
  document.querySelector("#task-form-input").value = "";
};
