import React, { Component } from "react";
import dayjs from "dayjs";
import { render } from "@testing-library/react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player'

class SingleMovie extends Component {
  constructor() {
    super()
    this.state = {
    singleMovie: null,
    video: '',
    error: ''
    }
  }

componentDidMount() {
fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}/videos`)
.then(res => {
  if (!res.ok) {
    throw new Error("Error receiving Data");
  } else {
    return res.json();
  }
})
.then(data => {
  this.setState({ video: data.videos })
})
.catch((error) => this.setState({ error: error.message }));
fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}`)
.then(res => {
  if (!res.ok) {
    throw new Error("Error receiving Data");
  } else {
    return res.json();
  }
})
.then(res => this.setState({ singleMovie: res.movie }))
.catch((error) => this.setState({ error: error.message }));
// console.log(res)
console.log(this.state)
}

render() {

  const getMovieGenre = (singleMovie) => {
    if (singleMovie.genres) {
      return singleMovie.genres.slice(0, singleMovie.genres.length).join(', ')
    } else {
      return 'Unknown Genre'
    }
  }

  return !this.state.singleMovie ? (
    <div className="spinner-container">
      <h3>Sorry we couldn't find what you were looking for!</h3>
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <div> 
        <Link exact to="/" className="nav">
          <button className="home-button" onClick={() => this.props.goHome()}>
           ⬅️
          </button>
        </Link>
      <div className="card" id={this.state.singleMovie.id}>
        <div className='movie-details' style={{ 
          backgroundImage: `url(${this.state.singleMovie.backdrop_path})`, backgroundSize: 'cover', height: '100vh'
        }}>
          <h1 className='movie-title'>{this.state.singleMovie.title}</h1>
          <div className='movie-details-box'>
            <p>{this.state.singleMovie.tagline}</p>
            <p>{this.state.singleMovie.overview}</p>
            <p>🍅 Rating: {this.state.singleMovie.average_rating.toFixed(2)}</p>
            <p>
              Release Date: {dayjs(this.state.singleMovie.release_date).format("MM/DD/YYYY")}
            </p>
            <p>Genre: {`${getMovieGenre(this.state.singleMovie)}`}</p>
            <p>Runtime: {this.state.singleMovie.runtime} Minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default SingleMovie;
