// map over an array and display all notes from note.js

import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTML } from "./Note.js";
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteListContainer");

eventHub.addEventListener("noteStateChanged", () => {
  const newNotes = useNotes();
  render(newNotes, useCriminals());
});

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--");

    deleteNote(id).then(() => {
      
    });
  }
});

export const NoteList = () => {
  getNotes()
    .then(getCriminals)
    .then(() => {
      const notes = useNotes();
      const suspects = useCriminals();

      render(notes, suspects);
    });
};

const render = (notes, suspects) => {
  contentTarget.innerHTML = `<h2>Notes</h2>` + notes
    .map((noteObj) => {
      noteObj.suspectObj = suspects.find((suspect) => {
        return suspect.id === parseInt(noteObj.suspectId);
      });
      return NoteHTML(noteObj);
    })
    .join("");
};
