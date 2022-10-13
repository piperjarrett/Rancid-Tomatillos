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
      movies: { movieData },
      randomMovie: "",
    };
  }

  displayMovieDetails = (id) => {
    console.log("it is clicking");
    console.log(id);
    console.log(this.state.movies.movieData.movies);
    const singleMovie = this.state.movies.movieData.movies.find(
      (movie) => movie.id === id
    );
    console.log(singleMovie);
    this.setState({ singleMovie: singleMovie });
    console.log(this.state);
  };
  // setValue = (value) => {
  //   this.setState({value:value}, this.getRandomMovie)
  //   // this {value:value} or {message:newMessage}, on line 27, is saying make this previous value/message:this new value/message
  // }

  getRandomMovie = () => {
    const newRandomMovie = movieData.movies[Math.floor(Math.random() * this.state.movies.movieData.movies.length)]
    this.setState( { randomMovie:newRandomMovie.backdrop_path } )
  }

  goHome = () => {
    this.setState({movies: {movieData}, singleMovie: ''})
  }

  componentDidMount = () => {
    this.getRandomMovie()
  }

  render() {
    return (
      <div className="App">
        <h1>Rancid Tomotillos</h1>
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
