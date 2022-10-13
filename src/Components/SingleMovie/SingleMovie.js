import React from "react";
import Card from "../Card/Card";

const SingleMovie = ({ singleMovie }) => {
  return (
    <div>
      <Card
        title={singleMovie.title}
        backdrop_path={singleMovie.backdrop_path}
        average_rating={singleMovie.average_rating}
        release_date={singleMovie.release_date}
        key={singleMovie.id}
      />
    </div>
  );
};

export default SingleMovie;
