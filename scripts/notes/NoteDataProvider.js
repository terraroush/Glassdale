const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged");

  eventHub.dispatchEvent(noteStateChangedEvent);
};
let notes = [];

const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then((response) => response.json())
    .then((parsedNotes) => {
      notes = parsedNotes;
    });
};

export const saveNote = (noteObj) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObj),
  })
    .then((result) => {
      console.log("ok, the notes are back to the api");
    })
    // getNotes to update to the latest
    .then(getNotes)
    // tell somebody that this event happened
    .then(dispatchStateChangeEvent);
};
