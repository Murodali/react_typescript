import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';



function App(){


  return (
    <div className="app">

      <Sidebar></Sidebar>
     <NotesList></NotesList>

    
    </div>
  );
}

export default App;
