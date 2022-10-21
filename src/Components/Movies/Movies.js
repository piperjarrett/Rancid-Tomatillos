import React from "react";
import "./Movies.css";
import { Link } from "react-router-dom";
import { Component } from "react";

const Movies = ({ movies }) => {
  const movieCards = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <Link to={`/movies/${movie.id}`} className="nav">
          <img
            alt={`poster image of ${movie.title}`}
            className="poster"
            src={movie.poster_path}
            id={movie.id}
            key={movie.id}
          />
        </Link>
      </div>
    );
  });
  return <section className="movie-container">{movieCards}</section>;
};

export default Movies;
