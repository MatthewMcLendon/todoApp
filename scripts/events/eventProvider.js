let events = [];

export const useEvents = () => {
  return events;
};

export const getEvents = () => {
  return fetch("http://localhost:8088/events")
    .then((response) => response.json())
    .then((response) => {
      events = response.slice();
    });
};

export const addEvent = (newEvent) => {
  return fetch("http://localhost:8088/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent),
  });
};
