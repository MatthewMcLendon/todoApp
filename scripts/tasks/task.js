export const taskComponent = (taskEntry) => {
  return `
    <div class="task-card">
      <input type="checkbox" id="${taskEntry.id}" class="taskCheckbox">
      <label for="task ${taskEntry.id}">${taskEntry.description}</label>
    </div>
    `;
};
