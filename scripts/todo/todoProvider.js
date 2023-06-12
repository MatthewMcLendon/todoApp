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
