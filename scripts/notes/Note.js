export const NoteHTML = (noteObj) => {
  return `
    <section class="note-card">
        <h4 class="note-suspect">${noteObj.suspectName}</h4>
        <div class="infoBo">
        <div class="note-date">${new Date(noteObj.date).toLocaleDateString("en-US")}</div>
        <div class="note-text">${noteObj.text}</div>
        </div>
        
    </section>
    `;
};
