const contentTarget = document.querySelector(".noteFormContainer");

const render = () => {
  contentTarget.innerHTML = `
<label for="note-text">Notable</label>
<input type="text" id="note-text">

<label for="note-date">Date</label>
<input type="date" id="note-date">

<label for="note-suspectName">Suspect</label>
<input type="text" id="note-suspectName">

<button type="button" id="saveNote">Save Note</button>
`;
};

export const NoteForm = () => {
  render();
};
