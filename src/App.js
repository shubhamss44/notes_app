import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([
   {
     id : nanoid(),
     text : "This is my first Note !!!",
     date : "10/07/2022"
   },
   {
    id : nanoid(),
    text : "This is my second Note !!!",
    date : "20/07/2022"
  },
  {
    id : nanoid(),
    text : "This is my third Note !!!",
    date : "30/07/2022"
  }
  ])

  const [searchText, setSearchtext] = useState("");
  const [darkMode, setDarkmode] = useState(false);

  useEffect(()=>{
    const savedNote = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if(savedNote){
      setNotes(savedNote);
    }
  },[]);

  useEffect(()=>{
   localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  },[notes]);

  const addNote=(text)=>{
   const date = new Date();
   const newNote={
    id : nanoid(),
    text : text ,
    date : date.toLocaleDateString()
   }
   const newNotes = [...notes, newNote];
   setNotes(newNotes);
  }

  const deleteNote=(id)=>{
   const newNote = notes.filter((note)=>note.id!==id);
   setNotes(newNote);
  }
  return(
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkmode}/>
      <Search handleSearchNote={setSearchtext}/>
      <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  )
}



export default App;