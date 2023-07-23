import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ParentAllProjects from './Components/ParentAllProjects';
import Parentgallery from './Components/ResponsiveMediaGallery/Parentgallery';
import ToDoList from './Components/ToDoList/PerantToDo/ToDoList'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ParentAllProjects/>}/>
        <Route exact path="/parentgallery" element={<Parentgallery/>}/>
        <Route exact path="/todolist" element={<ToDoList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
