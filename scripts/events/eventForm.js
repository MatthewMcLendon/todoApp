import {
  addEvent,
  getEvents,
  deleteEvent,
  useEvents,
  updateEvent,
} from "./eventProvider.js";
import { eventList } from "./eventList.js";

const targetElement = document.querySelector(".event-form-container");
const eventHub = document.querySelector(".container");

export const eventForm = () => {
  eventFormHandler();
  render();
};

const eventFormHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "event-form-submit") {
      clickEvent.preventDefault();

      let date = dateFormater();

      const newEvent = {
        title: document.querySelector(".event-form-title").value,
        description: document.querySelector(".event-form-description").value,
        location: document.querySelector(".event-form-location").value,
        date: date,
      };

      addEvent(newEvent).then(getEvents).then(eventList).then(render);
    }

    if (clickEvent.target.className === "event-delete-button") {
      deleteEvent(clickEvent.target.id).then(getEvents).then(eventList);
    }

    if (clickEvent.target.className === "event-update-button") {
      const events = useEvents();
      const targetID = clickEvent.target.id;

      const updateEvent = events.find(
        (event) => event.id.toString() === targetID
      );

      setEventForm(updateEvent);
    }

    if (clickEvent.target.className === "event-form-update") {
      clickEvent.preventDefault();
      let date = dateFormater();

      const updatedEvent = {
        title: document.querySelector(".event-form-title").value,
        description: document.querySelector(".event-form-description").value,
        location: document.querySelector(".event-form-location").value,
        date: date,
        id: clickEvent.target.id,
      };

      updateEvent(updatedEvent).then(getEvents).then(eventList).then(render);
    }
  });
};

const setEventForm = (event) => {
  render(event);
  const date = event.date.slice(0, 10);
  const time = event.date.slice(11);

  document.querySelector(".event-form-title").value = `${event.title}`;
  document.querySelector(".event-form-location").value = `${event.location}`;
  document.querySelector(
    ".event-form-description"
  ).value = `${event.description}`;
  document.querySelector(".event-form-date").value = `${date}`;
  document.querySelector(".event-form-time").value = `${time}`;
};

const dateFormater = () => {
  const tempDate = document.querySelector(".event-form-date").value;
  const tempTime = document.querySelector(".event-form-time").value;

  const date = `${tempDate}T${tempTime}`;
  return date;
};

const render = (event) => {
  return (targetElement.innerHTML = `
    <form class="event-form">
      <h2>Add New Event</h2> 
      <input type="hidden" id="event-form-id">
      <div>
        <label for="event-form-title">Event Name:</label>
        <input type="text" class="event-form-title">
      </div>
      <div>
        <label for="event-form-location">Event Location:</label>
        <input type="text" class="event-form-location">
      </div>
      <div>
        <label for="event-form-description">Event Description:</label>
        <input type="text" class="event-form-description">
      </div>
      <div>
        <label for="event-form-date">Event Date:</label>
        <input type="date" class="event-form-date">
      </div>
      <div>
        <label for="event-form-time">Event Time:</label>
        <input type="time" class="event-form-time">
      </div>
      ${buttonSelector(event)}
    </form>
    `);
};

const buttonSelector = (update) => {
  if (update) {
    return `<button class="event-form-update" id="${update.id}">Update</button>`;
  }

  return `<button class="event-form-submit" id="">Add event</button>`;
};
