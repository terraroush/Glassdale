// map over an array and display all notes from note.js

import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTML } from "./Note.js";

const eventHub = document.querySelector(".container");

const render = (noteCollection) => {
  const contentTarget = document.querySelector(".noteListContainer");
  let HTMLArray = noteCollection.map((noteObj) => {
    return NoteHTML(noteObj);
  });
  contentTarget.innerHTML = `<h2>Saved Notes</h2>
  ` + HTMLArray.join("");
};

export const NoteList = () => {
  getNotes().then(() => {
    const appStateNotes = useNotes();
    render(appStateNotes);
  });
};
