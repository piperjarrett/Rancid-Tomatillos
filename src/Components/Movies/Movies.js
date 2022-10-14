import React from "react";
import "./Movies.css";
import Card from "../Card/Card";

const Movies = ({ movies, displayMovieDetails, id }) => {
  const movieCards = movies.map((movie) => {
    return (
      <>
        <img
        className="poster"
        src={movie.poster_path}
        onClick={() => displayMovieDetails(movie.id)}
        id={movie.id}
      />
      </>
    );
  });
  return <div 
      className="movie-container">
        {movieCards}
  </div>;
};

export default Movies;
