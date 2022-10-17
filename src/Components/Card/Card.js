import React from "react";
import "./Card.css";

const Card = ({
  id,
  backdrop_path,
  title,
  average_rating,
  release_date,
  overview,
  genres,
  runtime,
  tagline,
  goHome
}) => {
  return (
    <div className="card" id={id}>
      <h3>{title}</h3>
      <p>{tagline}</p>
      <img className='backdrop' src={backdrop_path} />
      
      <p>{overview}</p>
      <p>🍅 Rating: {average_rating.toFixed(2)}</p>
      <p>Release Date: {release_date}</p>
      <p>Genre: {`${genres}`}</p>
      <p>Runtime: {runtime} Minutes</p>
      <button className='home-button' onClick={() => goHome()}>Home</button>
    </div>
  )
}

export default Card
