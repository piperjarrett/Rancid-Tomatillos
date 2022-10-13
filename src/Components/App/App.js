import "./App.css";
import React, { Component } from "react";
import movieData from "../Movies/movieData";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";

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

  // getRandomMovie = () => {
  //   const newRandomMovie = movieData[this.state.movies][Math.floor(Math.random() * movieData[this.state.movies].length)]
  //   this.setState({randomMovie:newRandomMovie})
  // }

  render() {
    return (
      <div className="App">
        <h1>Rancid Tomotillos</h1>
        {/* <Header 
          randomMovie={this.state.randomMovie}
        /> */}
        {this.state.singleMovie && (
          <SingleMovie singleMovie={this.state.singleMovie} />
        )}
        {!this.state.singleMovie && <Movies
          movies={this.state.movies}
          displayMovieDetails={this.displayMovieDetails}
          // findSingleMovie={this.findSingleMovie}
        />}
      </div>
    );
  }
}

export default App;
