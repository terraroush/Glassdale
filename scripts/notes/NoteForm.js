import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote-btn") {
    let noteContent = document.querySelector("#note-text");
    let noteCriminal = document.querySelector("#note-criminalSelect");

    if (noteCriminal.value !== "0") {
      const newNote = {
        text: noteContent.value,
        suspectId: parseInt(noteCriminal.value),
        date: Date.now(),
      };
      noteContent.value = ""
      noteCriminal.value = "0"
      saveNote(newNote);
    } else {
      window.alert("Choose a suspect");
    }
  }
});

const render = (criminalArray) => {
  contentTarget.innerHTML = `
    <h3>Write a Note</h3>
    
    <select class="dropdown" id="note-criminalSelect">
    <option value="0">Please select a criminal...</option>
    ${criminalArray
      .map((criminalObj) => {
        return `<option value="${criminalObj.id}">${criminalObj.name}</option>`;
      }).join("")
    }
    </select>
    
    <textarea id="note-text" placeholder="Put your note here"></textarea>
    <button type="button" id="saveNote-btn">Save Note</button> 
    
    `;
};

export const NoteForm = () => {
  getCriminals()
  .then(() => {
    render(useCriminals());
  });
};
