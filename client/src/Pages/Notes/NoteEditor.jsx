import React, { useState } from 'react';

const NoteEditor = ({ note, onClose }) => {
  const [text, setText] = useState(note.preview);

  return (
    <div className="note-editor">
      <div className="editor-header">
        <h2>Edit: {note.title}</h2>
        <button onClick={onClose}>Back</button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="editor-textarea"
      />
    </div>
  );
};

export default NoteEditor;
