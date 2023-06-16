import { taskList } from "./tasks/taskList.js";
import { getTasks } from "./tasks/taskProvider.js";
import { taskForm } from "./tasks/taskForm.js";
import { getEvents } from "./events/eventProvider.js";
import { eventList } from "./events/eventList.js";
import { eventForm } from "./events/eventForm.js";

getTasks()
  .then(taskList)
  .then(taskForm)
  .then(getEvents)
  .then(eventForm)
  .then(eventList);
