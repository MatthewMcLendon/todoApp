export const eventComponent = (event) => {
  return `
    <div class="event-card">
    <h2 class="event-title">${event.title}</h2>
    <div class="event-location">${event.location}</div>
    <p class="event-description">${event.description}</p>
    <div class="event-date-container">${dateFormater(event.date)}</div>
    <button class="event-delete-button" id="${event.id}">Delete event</button>
    </div>
    `;
};

const dateFormater = (date) => {
  const eventDate = new Date(date);
  const dateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return `
  <div class="event-date">${eventDate.toLocaleString(
    `en-US`,
    dateOptions
  )}</div>
  <div class ="event-time">${eventDate.toLocaleTimeString(
    `en-US`,
    timeOptions
  )}</div>
  `;
};
