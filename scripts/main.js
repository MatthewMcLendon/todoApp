import { todoList } from "./todo/todoList.js";
import { getTodo } from "./todo/todoProvider.js";
import { todoForm } from "./todo/todoForm.js";

getTodo().then(todoList).then(todoForm);
