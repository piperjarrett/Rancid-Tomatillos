import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import movieData from "../Movies/movieData";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";
import Header from "../Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
    };
  }

  displayMovieDetails = (id) => {
    const singleMovie = this.state.movies.find((movie) => movie.id === id);
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${singleMovie.id}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ singleMovie: data.movie }));
  };

  getHeaderMovie = () => {
    const newRandomMovie =
      movieData.movies[Math.floor(Math.random() * movieData.movies.length)];
    this.setState({ randomMovie: newRandomMovie.backdrop_path });
  };

  goHome = () => {
    this.setState({ singleMovie: "" });
  };

  componentDidMount = () => {
    this.getHeaderMovie();
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.movies }))
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <main className="App">
        <Header getheadermovie={this.getheadermovie} />
        {/* {this.state.error && <h2>Sorry! Something Went Wrong!</h2>} */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                (
                  <img className="header-image" src={this.state.randomMovie} />
                ) && (
                  <Movies
                    movies={this.state.movies}
                    displayMovieDetails={this.displayMovieDetails}
                  />
                )
              );
            }}
          />
          <Route
            exact
            path="/movies/:id"
            render={({ match }) => {
              console.log(match);
              const movieToRender = this.state.movies.find(
                (movie) => movie.id === parseInt(match.params.id)
              );
              return (
                <SingleMovie singleMovie={movieToRender} goHome={this.goHome} />
              );
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
