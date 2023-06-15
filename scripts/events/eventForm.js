import { addEvent, getEvents } from "./eventProvider.js";
import { eventList } from "./eventList.js";

const targetElement = document.querySelector(".event-form-container");
const eventHub = document.querySelector(".container");

export const eventForm = () => {
  eventFormHandler();
  render();
};

const eventFormHandler = () => {
  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "event-form-submit") {
      clickEvent.preventDefault();

      let date = dateFormater();

      const newEvent = {
        title: document.querySelector(".event-form-title").value,
        description: document.querySelector(".event-form-description").value,
        location: document.querySelector(".event-form-location").value,
        date: date,
      };

      addEvent(newEvent).then(getEvents).then(eventList).then(eventFormReset);
    }
  });
};

const eventFormReset = () => {
  document.querySelector(".event-form-title").value = "";
  document.querySelector(".event-form-location").value = "";
  document.querySelector(".event-form-description").value = "";
  document.querySelector(".event-form-date").value = "";
  document.querySelector(".event-form-time").value = "";
};

const dateFormater = () => {
  const tempDate = document.querySelector(".event-form-date").value;
  const tempTime = document.querySelector(".event-form-time").value;

  const date = `${tempDate}T${tempTime}:00`;
  return date;
};

const render = () => {
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
      <button id="event-form-submit">Add event</button>
    </form>
    `);
};
