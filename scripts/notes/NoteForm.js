import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

// this is an event listener on the save button:
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    const noteContent = document.querySelector("#note-text");
    const noteCriminal = document.querySelector("#note-criminalSelect");

    if (noteCriminal.value !== "0") {
      const newNote = {
        text: noteContent.value,
        date: Date.now(),
        suspectName: noteCriminal.value,
      };
      saveNote(newNote);
    } else {
      window.alert("Choose a suspect");
    }
  }
});

const render = (criminalArray) => {
  contentTarget.innerHTML = `
    <textarea id="note-text" placeholder="Put your note here"></textarea>

    <select class="dropdown" id="note-criminalSelect">
        <option value="0">Please select a criminal...</option>
        ${criminalArray
          .map((criminalObj) => {
            return `<option>${criminalObj.name}</option>`;
          })
          }
    </select>

    <button type="button" id="saveNote">Save Note</button> 
    `;
};

export const NoteForm = () => {
  getCriminals().then(() => {
    render(useCriminals());
  });
};
