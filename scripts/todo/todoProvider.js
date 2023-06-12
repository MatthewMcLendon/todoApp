let todo = [];

export const useTodo = () => {
  return todo;
};

export const getTodo = () => {
  return fetch("http://localhost:8088/todo")
    .then((response) => response.json())
    .then((response) => {
      todo = response.slice();
    });
};

export const addTodo = (newTodo) => {
  console.log("add route", newTodo);
  return fetch("http://localhost:8088/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};
