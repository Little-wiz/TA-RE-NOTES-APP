import React, { useState } from 'react';
import "./Content.css";
import Notes from '../Notes/Notes';
import NoteEditor from "../Notes/NoteEditor";
import NoteCard from '../../Components/Card/NoteCard';
const Content = () => {
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div className='content-container'>
      <div className="content">

        {/* If editingNote exists, show editor */}
        {editingNote ? (
          <NoteEditor
            note={editingNote}
            onClose={() => setEditingNote(null)}
          />
        ) : (
          <>
            {/* SECTION 1  */}
            <div className="recent">
              <div className="recent-header">
                <h2>Recent Files</h2>
              </div>
              <div className="recent-files-grid">
                <div className="files">
                  <Notes onEdit={setEditingNote} />
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="recent-body">
                <Notes onEdit={setEditingNote} />
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Content;