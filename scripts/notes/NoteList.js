// map over an array and display all notes from note.js

import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTML } from "./Note.js";
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteListContainer");

const render = (notes, suspects) => {

  contentTarget.innerHTML = notes.map((noteObj) => {
    noteObj.suspectObj = suspects.find(suspect => {
      return suspect.id === parseInt(noteObj.suspectId)
    })
    return NoteHTML(noteObj)
  }).join("") 
};

export const NoteList = () => {
  getNotes()
  .then(getCriminals) 
  .then(() => {
    const notes = useNotes();
    const suspects = useCriminals();
    render(notes, suspects);
  });
};

eventHub.addEventListener("noteStateChanged", () => {
  const newNotes = useNotes()
  render(newNotes, useCriminals())
})