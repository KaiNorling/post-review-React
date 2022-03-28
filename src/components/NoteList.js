import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NoteList({notes,handleAddNote,handleDeleteNote}) {


    
  return (
    <div className='notes-list'>
        <AddNote handleAddNote={handleAddNote} />
      {notes.map((note)=>
          <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}  />
      )}



    </div>
  )
}

export default NoteList