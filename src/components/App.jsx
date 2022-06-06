import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(event) {
    event.preventDefault();

    const newNote = {
      title: event.target[0].value,
      content: event.target[1].value
    }

    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(deletedNoteId) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, noteId) => {
        return noteId !== deletedNoteId;
      });
    });
  }

  const [titleInputText, setTitleInputText] = React.useState('');

  function updateTitleInputText(event) {
    setTitleInputText(event.target.value);
  }

  const [contentInputText, setContentInputText] = React.useState('');

  function updateContentInputText(event) {
    setContentInputText(event.target.value);
  }

  return (
    <div>
      <Header />
      <CreateArea
        titleInputText={titleInputText}
        contentInputText={contentInputText}

        updateTitleInputText={updateTitleInputText}
        updateContentInputText={updateContentInputText}

        addNote={addNote}
      />
      {notes.map((note, noteIndex) => {
        return (
          <Note
            key={noteIndex}
            id={noteIndex}
            title={note.title}
            content={note.content}

            deleteNote={deleteNote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
