import { taskList } from "./tasks/taskList.js";
import { getTasks } from "./tasks/taskProvider.js";
import { taskForm } from "./tasks/taskForm.js";

getTasks().then(taskList).then(taskForm);
