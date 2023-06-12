import { useTodo, getTodo } from "./todo/todoProvider.js";

const todo = getTodo().then(useTodo);

console.log(todo);
