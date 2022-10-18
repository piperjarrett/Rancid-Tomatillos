import React from "react";
import "./Movies.css";
import { Link } from "react-router-dom";

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCards = movies.map((movie) => {
    return (
      <>
        <Link to={`/movies/${movie.id}`} className="nav">
          <img
            className="poster"
            src={movie.poster_path}
            onClick={() => displayMovieDetails(movie.id)}
            id={movie.id}
            key={movie.id}
          />
        </Link>
      </>
    );
  });
  return <section className="movie-container">{movieCards}</section>;
};

export default Movies;
