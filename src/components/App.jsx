import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteIndex, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
