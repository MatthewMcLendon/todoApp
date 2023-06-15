export const eventComponent = (event) => {
  return `
    <div class="event-card">
    <h2 class="event-title">${event.title}</h2>
    <div class="event-location">${event.location}</div>
    <p class="event-description">${event.description}</p>
    <div class="event-date">${event.date}</div>
    </div>
    `;
};

const timeFormater = (time) => {};
