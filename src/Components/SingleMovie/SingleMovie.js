import React, { Component } from "react";
import Card from "../Card/Card";
import dayjs from "dayjs";
import { render } from "@testing-library/react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";

const SingleMovie = ({ singleMovie, goHome }) => {
  // const movieGenres = singleMovie.genres.split(',').join(', ')
  return !singleMovie ? (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <div>
      <div className="card" id={singleMovie.id}>
        <h3>{singleMovie.title}</h3>
        <p>{singleMovie.tagline}</p>
        <img className="backdrop" src={singleMovie.backdrop_path} />

        <p>{singleMovie.overview}</p>
        <p>🍅 Rating: {singleMovie.average_rating.toFixed(2)}</p>
        <p>
          Release Date: {dayjs(singleMovie.release_date).format("MM/DD/YYYY")}
        </p>
        <p>Genre: {`${singleMovie.genres}`}</p>
        <p>Runtime: {singleMovie.runtime} Minutes</p>
        <Link exact to="/" className="nav">
          <button className="home-button" onClick={() => goHome()}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

// class SingleMovie extends Component {
//   constructor() {
//     super()
//     this.state = {
//     video: ''
//     }
//   }

// componentDidMount() {
// fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovie.id}/videos`)
// .then(res => res.json())
// .then(data => {
//   this.setState({ video: data.videos[0] })
//   console.log(data.videos[0])
//   console.log(this.state.video)
//   console.log(this.state)
// })
// }

// render() {
//   return (
//     <div>
//       <Card
//         title={this.props.singleMovie.title}
//         tagline={this.props.singleMovie.tagline}
//         backdrop_path={this.props.singleMovie.backdrop_path}
//         video={this.state.video}
//         overview={this.props.singleMovie.overview}
//         average_rating={this.props.singleMovie.average_rating}
//         release_date={dayjs(this.props.singleMovie.release_date).format('MM/DD/YYYY')}
//         genres={this.props.singleMovie.genres}
//         runtime={this.props.singleMovie.runtime}
//         key={this.props.singleMovie.id}
//         goHome={this.props.goHome}
//       />
//     </div>
//   )
// }
// }

export default SingleMovie;
