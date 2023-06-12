export const todoComponent = (todoEntry) => {
  return `
    <div class="todo-card">
      <input type="checkbox" id="todo${todoEntry.id}" class="todoCheckbox" value="todo${todoEntry.id}">
      <label for="todo ${todoEntry.id}">${todoEntry.description}</label>
    </div>
    `;
};
