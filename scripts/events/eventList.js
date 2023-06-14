import { useEvents } from "./eventProvider.js";
import { eventComponent } from "./event.js";

const targetElement = document.querySelector(".event-container");

export const eventList = () => {
  const events = useEvents();
  render(events);
};

const render = (events) => {
  targetElement.innerHTML = events.map((event) => {
    return eventComponent(event);
  });
};
