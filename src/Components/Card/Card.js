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
  goHome
}) => {
  return (
    <div className="card" id={id}>
      <h3>{title}</h3>
      <img className='backdrop' src={backdrop_path} />
      <p>Rating: {average_rating}</p>
      <p>Release Date: {release_date}</p>
      <button onClick={() => goHome()}>Home</button>
    </div>
  );
};

export default Card;
