import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";
import { saveNote } from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

//  This is an event listener that defines some variables and invokes a function: Listen for a click when the click is on the save button. variables to watch for are two spots on the dom referring to the textarea input and the criminal dropdown select. Watch for the value of the criminal dropdown to be anything other than 0. Then it defines the variable newNote as an object with three key/value pairs. These coordinate with our JSON note objects. When anything other than 0 is selected, the values of the object's properties change accordingly.Those values are literally the new note and those values are stored in the variable newNote. Now we invoke saveNote with our newNote. the saveNote function posts our note to our API as JSON string! Then our app gets all the notes back from the API, and then it tells something that there is a state change!! 
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
    <h3>Write a Note</h3>
    <textarea id="note-text" placeholder="Put your note here"></textarea>

    <select class="dropdown" id="note-criminalSelect">
        <option value="0">Please select a criminal...</option>
        ${criminalArray
          .map((criminalObj) => {
            return `<option value="${criminalObj.name}">${criminalObj.name}</option>`;
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
