import React from "react";
import Card from "../Card/Card";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const SingleMovie = ({ singleMovie, goHome }) => {
  console.log(singleMovie);
  return (
    <div>
      <Card
        title={singleMovie.title}
        tagline={singleMovie.tagline}
        backdrop_path={singleMovie.backdrop_path}
        overview={singleMovie.overview}
        average_rating={singleMovie.average_rating}
        release_date={dayjs(singleMovie.release_date).format("MM/DD/YYYY")}
        genres={singleMovie.genres}
        runtime={singleMovie.runtime}
        key={singleMovie.id}
        goHome={goHome}
      />
    </div>
  );
};

export default SingleMovie;
