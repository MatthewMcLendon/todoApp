export const taskComponent = (taskEntry) => {
  return `
    <div class="task-card">
      <input type="checkbox" id="task${taskEntry.id}" class="taskCheckbox" value="task${taskEntry.id}">
      <label for="task ${taskEntry.id}">${taskEntry.description}</label>
    </div>
    `;
};
