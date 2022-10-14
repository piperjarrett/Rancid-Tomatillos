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
    );
    this.setState({ singleMovie: singleMovie });
  };

  getHeaderMovie = () => {
    const newRandomMovie = movieData.movies[Math.floor(Math.random() * movieData.movies.length)]
    this.setState( { randomMovie:newRandomMovie.backdrop_path } )
  }

  goHome = () => {
    this.setState({singleMovie: ''})
  }


  componentDidMount = () => {
    this.getHeaderMovie()
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json())
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
    )};
    </div>
  )}
}

export default App;
