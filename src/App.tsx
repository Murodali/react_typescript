import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Main from './components/Main';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';



function App(){


  return (
    <div className="app">

      <Sidebar></Sidebar>
     <NotesList></NotesList>
     <Main></Main>

    
    </div>
  );
}

export default App;
