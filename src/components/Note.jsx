import React from "react";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <div>{date}</div>
        <button className="delete-btn" onClick={() => handleDeleteNote(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
