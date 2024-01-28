import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
// import './App.css'

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const {movie,isLoading} = useGlobalContext();
  if(isLoading){
    return (
        <div className='loading'>Loading...</div>
    
    )
  }

  return (
    <>
    <section className='Movie-page'>
    <div className='grid grid-4-col'>
       { 
        movie? movie.map((index)=>{
        const {
          imdbID,Title,Poster
          } = index;
          const movieName = Title.substring(0,15);
        return (
        
          <NavLink to={`movie/${imdbID}`} key={imdbID} >
            <div className='card'>
            <div className='card-info'>
             <h2>{movieName.length >= 15 ? `${movieName}...`: movieName}</h2>
             <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
            </div>
            </div>
          </NavLink>
        )
       }):""}
    </div>
    </section>
    </>
  );
  
};

export default Movie
