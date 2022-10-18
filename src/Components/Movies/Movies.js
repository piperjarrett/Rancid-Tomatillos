import React from "react";
import "./Movies.css";

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCards = movies.map((movie) => {
    return (
      <>
        <img
        className="poster"
        src={movie.poster_path}
        onClick={() => displayMovieDetails(movie.id)}
        id={movie.id}
        key={movie.id}
      />
      </>
    );
  });
  return <section 
      className="movie-container">
        {movieCards}
  </section>;
};

export default Movies;
