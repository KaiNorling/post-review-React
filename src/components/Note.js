
 import { MdDeleteForever } from 'react-icons/md';

import React from 'react'

function Note({id,text,date,handleDeleteNote}) {


    
  return (
    <div className='note'>
    <span>{text}</span>
    <div className='note-footer'>
        <small>{date}</small>
       	<MdDeleteForever onClick={()=>{handleDeleteNote(id)}} />
    </div>
</div>
  )
}

export default Note