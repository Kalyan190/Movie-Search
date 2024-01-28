import React from 'react'
import {Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import SingleMovieInfo from "./SingleMovieInfo";
import Error from './Error';
import './App.css'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
     <Route path='movie/:id' element={<SingleMovieInfo/>} />
    {/* User undefined url enter then error*/}
     <Route path='*' element={<Error/>} />
    </Routes>
    
  )
}

export default App
