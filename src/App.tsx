import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadNotes } from './redux/actions/actions';
import { RootState } from './redux/reducers/rootReducer';


function App() {

  const dispatch = useDispatch()
  const notesState = useSelector((state:RootState) => state.notes);

  console.log(notesState)
  

  useEffect(() => {

    dispatch(loadNotes)

  }, [])

  console.log(notesState)


  return (
    <div className="App">

      <h1>Hello</h1>
{/* 
      {notesState.map(note => (

        <div key={note.id}>
          <p>{note.title}</p>
        </div>
      ))} */}
    
    </div>
  );
}

export default App;
