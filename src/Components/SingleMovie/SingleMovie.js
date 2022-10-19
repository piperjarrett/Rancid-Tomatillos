import React, { Component } from "react";
import dayjs from "dayjs";
import { render } from "@testing-library/react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
// import ReactPlayer from 'react-player'

// const SingleMovie = ({ singleMovie, goHome }) => {

//   const getMovieGenre = (singleMovie) => {
//     if (singleMovie.genres) {
//       return singleMovie.genres.slice(0, singleMovie.genres.length).join(', ')
//     } else {
//       return 'Unknown Genre'
//     }
//   }

//   return !singleMovie ? (
//     <div className="spinner-container">
//       <div className="loading-spinner"></div>
//     </div>
//   ) : (
//     <div>
//       <div className="card" id={singleMovie.id}>
//         <h3 className='movie-title'>{singleMovie.title}</h3>
//         <div className='movie-details' style={{ 
//       backgroundImage: `url(${singleMovie.backdrop_path})`, backgroundSize: 'cover', height: '100vh'
//     }}>
//           <p>{singleMovie.tagline}</p>
//           <p>{singleMovie.overview}</p>
//           <p>🍅 Rating: {singleMovie.average_rating.toFixed(2)}</p>
//           <p>
//             Release Date: {dayjs(singleMovie.release_date).format("MM/DD/YYYY")}
//           </p>
//           <p>Genre: {`${getMovieGenre(singleMovie)}`}</p>
//           <p>Runtime: {singleMovie.runtime} Minutes</p>
//         </div>
//         <Link exact to="/" className="nav">
//           <button className="home-button" onClick={() => goHome()}>
//             Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

class SingleMovie extends Component {
  constructor() {
    super()
    this.state = {
    singleMovie: null,
    video: ''
    }
  }

componentDidMount() {
fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}/videos`)
.then(res => res.json())
.then(data => {
  this.setState({ video: data.videos })
})
fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}`)
.then(res => res.json())
.then(res => this.setState({ singleMovie: res.movie }))
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
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <div> 
      <div className="card" id={this.state.singleMovie.id}>
        <h3 className='movie-title'>{this.state.singleMovie.title}</h3>
        <div className='movie-details' style={{ 
      backgroundImage: `url(${this.state.singleMovie.backdrop_path})`, backgroundSize: 'cover', height: '100vh'
    }}>
          <p>{this.state.singleMovie.tagline}</p>
          <p>{this.state.singleMovie.overview}</p>
          <p>🍅 Rating: {this.state.singleMovie.average_rating.toFixed(2)}</p>
          <p>
            Release Date: {dayjs(this.state.singleMovie.release_date).format("MM/DD/YYYY")}
          </p>
          <p>Genre: {`${getMovieGenre(this.state.singleMovie)}`}</p>
          <p>Runtime: {this.state.singleMovie.runtime} Minutes</p>
        </div>
        <Link exact to="/" className="nav">
          <button className="home-button" onClick={() => this.props.goHome()}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
}

export default SingleMovie;
