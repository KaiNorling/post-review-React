import {
    useState,
    useEffect
} from 'react';

import React from 'react'
import Header from './components/Header'
import NoteList from './components/NoteList'
import {
    nanoid
} from 'nanoid';
import Search from './components/Search';

function App() {

    const [notes, setNotes] = useState([
        {
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]);

    const [searchText, setSearchText] = useState("")
    const [darkMode, setDarkMode] = useState(false);

    const addNote=(text)=>{
        const date = new Date();
        const newNote={
            id:nanoid(),
            text:text,
            date:date.toLocaleDateString(),

        }
        const newNotes=[...notes,newNote]
        setNotes(newNotes)

    }


    const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

    const searchNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};


	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

    useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);


    return ( 
    <div className={`${darkMode && "dark-mode"}`}>
             < div className = 'container' >
         <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList notes = { notes.filter((note)=>note.text.toLocaleLowerCase().includes(searchText)) } handleAddNote={addNote} handleDeleteNote={deleteNote}/>

        </div>

    </div>
    )
}

export default App