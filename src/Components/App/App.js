import "./App.css";
import React, { Component } from "react";
import movieData from "../Movies/movieData";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import Header from '../Header/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    };
  }

  displayMovieDetails = (id) => {
    const singleMovie = this.state.movies.find(
      (movie) => movie.id === id
    )
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${singleMovie.id}`)
    .then(res => res.json())
    .then(data => this.setState({ singleMovie: data.movie }))
  };

  // displayMovieDetails = (id) => {
  //   const singleMovie = this.state.movies.find(
  //     (movie) => movie.id === id
  //   )
  //   const video = this.state.videos.find(trailer => {
  //     this.state.movies.forEach(movie => trailer.movie_id === movie.id)
  //   })
  //   fetch([`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${singleMovie.id}`, `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${singleMovie.id}/videos`])
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     this.setState({ singleMovie: data[0].movie, video: data[1].videos[0] })
  //   })
  // };

  getHeaderMovie = () => {
    const newRandomMovie = movieData.movies[Math.floor(Math.random() * movieData.movies.length)]
    console.log(newRandomMovie)
    this.setState( { randomMovie:newRandomMovie.backdrop_path } )
  }

  goHome = () => {
    this.setState({singleMovie: ''})
  }


  componentDidMount = () => {
    this.getHeaderMovie()
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => {
      if(!res.ok) {
        throw new Error('Error receiving Data')
      } else {
        return res.json()
      }
    })
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => this.setState( { error: err.message } ))
  }

  render() {
    return (
      <div className="App">
        <Header getheadermovie={this.getheadermovie}/>
        {this.state.error && <h2>Sorry! Something Went Wrong!</h2>}
        {this.state.singleMovie && (
          <SingleMovie singleMovie={this.state.singleMovie} goHome={this.goHome} />
        )}
        {!this.state.singleMovie && (<div> <img className='header-image' src={this.state.randomMovie} /> <Movies
          movies={this.state.movies}
          displayMovieDetails={this.displayMovieDetails}
          />
          </div>
    )}
    </div>
  )}
}

export default App;
