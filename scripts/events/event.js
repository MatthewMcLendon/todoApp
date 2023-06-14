const eventComponent = (event) => {
  return `
    <div class="event-card">
    <h2 class="event-title">${event.title}</h2>
    <p class="event-description">${event.description}</p>
    </div>
    `;
};
