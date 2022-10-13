import React from "react";
import "./Card.css";

const Card = ({
  id,
  poster_path,
  backdrop_path,
  title,
  average_rating,
  release_date,
  displayMovieDetails,
}) => {
  return (
    <div className="card" id={id}>
      <h3>{title}</h3>
      <img
        className="poster"
        src={poster_path}
        onClick={() => displayMovieDetails(id)}
      />
      <img src={backdrop_path} />
      <p>{average_rating}</p>
      <p>{release_date}</p>
    </div>
  );
};

export default Card;
