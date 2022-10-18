import React from "react";
import Card from "../Card/Card";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

// const SingleMovie = ({ singleMovie, goHome }) => {
//   return (
//     <div>
//       <Card
//         title={singleMovie.title}
//         tagline={singleMovie.tagline}
//         backdrop_path={singleMovie.backdrop_path}
//         overview={singleMovie.overview}
//         average_rating={singleMovie.average_rating}
//         release_date={dayjs(singleMovie.release_date).format("MM/DD/YYYY")}
//         genres={singleMovie.genres}
//         runtime={singleMovie.runtime}
//         key={singleMovie.id}
//         goHome={goHome}
//       />
//     </div>
//   );
// };

const SingleMovie = ({ singleMovie, goHome }) => {
  console.log(singleMovie);
  return (
    <div className="card" id={singleMovie.id}>
      <h3>{singleMovie.title}</h3>
      <p>{singleMovie.tagline}</p>
      <img className="backdrop" src={singleMovie.backdrop_path} />
      <p>{singleMovie.overview}</p>
      <p>🍅 Rating: {singleMovie.average_rating.toFixed(2)}</p>
      <p>Release Date: {singleMovie.release_date}</p>
      <p>Genre: {`${singleMovie.genres}`}</p>
      <p>Runtime: {singleMovie.runtime} Minutes</p>
      <Link exact to="/" className="nav">
        <button className="home-button" onClick={() => goHome()}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default SingleMovie;
