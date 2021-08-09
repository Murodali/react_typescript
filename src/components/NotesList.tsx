import React,{useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { loadNotes } from '../redux/actions/actions';
import { RootState } from '../redux/reducers/rootReducer';
import NoteComponent from './NoteComponent';



const NotesList:React.FC= () => {
   

  const dispatch = useDispatch()
  const notesState = useSelector((state: RootState) => state.notes.notes);
  console.log(notesState)
  
  useEffect(() => {

    dispatch(loadNotes())

  }, [])

  console.log(notesState)


    return (
        <div className="notesist">

            <div className="search">
                <input type="text" placeholder="search"></input>
            </div>

            {notesState.map(note => (
                <NoteComponent key={note.id}  id={note.id} title={note.title} completed={note.completed}> </NoteComponent>
            ))}
            
           
        </div>
    )
}

export default NotesList
