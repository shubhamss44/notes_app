import React from 'react'
import { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("");
    const charLimit = 200;
    const handleChange=(e)=>{
      if(charLimit-e.target.value.length>=0){
        setNoteText(e.target.value);
      }
    }
    const handleSaveClick = ()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText("");
        }else{
            alert("Add Note..... ");
        }
    }
  return (
    <div className='note new'>
        <textarea rows="8" cols="10" onChange={handleChange} value={noteText} placeholder="Type to add note.....">
        </textarea>
        <div className='note-footer'>
            <small>{charLimit-noteText.length} remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote;