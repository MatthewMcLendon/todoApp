export const todoComponent = (todoEntry) => {
  return `
    <input type="checkbox" id="todo ${todoEntry.id}" value="todo${todoEntry.id}Checkbox">
    <label for="todo ${todoEntry.id}">${todoEntry.description}</label>
    `;
};
