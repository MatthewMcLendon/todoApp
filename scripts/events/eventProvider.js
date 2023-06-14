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
