import React from "react";
import "./Movies.css";
import Card from "../Card/Card";

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCards = movies.movieData.movies.map((movie) => {
    return (
      <Card
        poster_path={movie.poster_path}
        key={movie.id}
        displayMovieDetails={displayMovieDetails}
        id={movie.id}
      />
    );
  });
  return <div className="movie-container">{movieCards}</div>;
};

export default Movies;
