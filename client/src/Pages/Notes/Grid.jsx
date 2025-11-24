import React from 'react'
import NoteCard from '../../Components/Card/NoteCard';
import "./Notes.css";

const notes = [
  {
    id: 1,
    title: "Mid Term Exam",
    date: "01/23/2025",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, a?",
    lastUpdated: "11:09AM, Monday",
  },
  {
    id: 2,
    title: "Grocery Shopping",
    date: "01/22/2025",
    preview: "Buy milk, bread, eggs, fruit, and veggies.",
    lastUpdated: "10:02AM, Sunday",
  },
];


const Grid = ({ onEdit }) => {
  return (
    <div>
        <div className="header">
            <h2>My Notes</h2>
        </div>

        {/* Card Display  */}
        <div className="card-display">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={onEdit}

            />
          ))}
        </div>
    </div>
  )
}

export default Grid;