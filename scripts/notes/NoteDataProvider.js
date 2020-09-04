const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged");
    
    eventHub.dispatchEvent(noteStateChangedEvent);
};

let notes = [];

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
    .then((response) => response.json())
    .then((parsedNotes) => {
        notes = parsedNotes;
    });
};

export const useNotes = () => {
    return notes.slice();
}

export const saveNote = (noteObj) => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteObj),
  })
    .then((result) => {
      console.log("ok, the notes are sent to the api, setting off a series of functions, back and forth between the api and the app");
    })
    // getNotes to update to the latest
    .then(getNotes)
    // tell something that this event happened
    .then(dispatchStateChangeEvent);
    
};
