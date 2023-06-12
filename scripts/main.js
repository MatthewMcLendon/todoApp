import { todoList } from "./todo/todoList.js";
import { getTodo } from "./todo/todoProvider.js";

getTodo().then(todoList);
