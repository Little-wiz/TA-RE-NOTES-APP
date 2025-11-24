import { BsFillPencilFill } from "react-icons/bs";
import { PiTimer } from "react-icons/pi";
import "./Card.css";

const NoteCard = ({ note, onEdit }) => {
  const { date, title, preview, lastUpdated } = note;

  return (
    <div className='note-card-wrapper'>
      
      <div className="datestamp">
        <p>{date}</p>
      </div>

      <div className="note-card-title-wrapper">
        <div className="note-card-title">
          <h4>{title}</h4>
        </div>

        <div
          className="note-card-icon"
          onClick={() => onEdit(note)}
          style={{ cursor: "pointer" }}
        >
          <BsFillPencilFill size={13} className="mt-1.5" />
        </div>
      </div>

      <div className="note-card-preview">{preview}</div>

      <br />

      <div className="last-updated">
        <div className="updated-icon">
          <PiTimer className="mt-1" />
        </div>
        <div className="last-updated-timestamp">{lastUpdated}</div>
      </div>

    </div>
  );
};

export default NoteCard;
