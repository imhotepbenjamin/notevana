export default class notevanaAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem('notevana-note') || '[]');

        return notes.sort((a,b) => {
            return new Date(a.updatedTime) > new Date(b.updatedTime) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = notevanaAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem('notevana-note', JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = notevanaAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem('noteva', JSON.stringify(newNotes));
    }
}
