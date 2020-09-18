export const NoteHTML = (noteObj) => {
  return `
    <section class="note-card">
        <h4 class="note-suspect">Suspect: ${noteObj.suspectObj.name}</h4>
        <div class="infoBox">
          <div class="note-date">${new Date(noteObj.date).toLocaleDateString("en-US")}</div>
          <div class="note-text">${noteObj.text}</div>
        </div>
        <button id="deleteNote--${noteObj.id}">Delete</button>

    </section>
    `;
};
