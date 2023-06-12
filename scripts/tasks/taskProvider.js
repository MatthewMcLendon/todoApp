let tasks = [];

export const useTasks = () => {
  return tasks;
};

export const getTasks = () => {
  return fetch("http://localhost:8088/tasks")
    .then((response) => response.json())
    .then((response) => {
      tasks = response.slice();
    });
};

export const addTask = (newTask) => {
  return fetch("http://localhost:8088/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
};

export const deleteTask = (taskID) => {
  return fetch(`http://localhost:8088/tasks/${taskID}`, {
    method: "DELETE",
  });
};
