export const eventComponent = (event) => {
  return `
    <div class="event-card">
    <h2 class="event-title">${event.title}</h2>
    <div class="event-location">${event.location}</div>
    <p class="event-description">${event.description}</p>
    <div class="event-time">${timeFormater(event.time)}</div>
    </div>
    `;
};

const timeFormater = (time) => {
  return `${time}`;
};
