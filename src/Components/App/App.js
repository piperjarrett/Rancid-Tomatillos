import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import SingleMovie from "../SingleMovie/SingleMovie";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      error: "",
    };
  }

  getHeaderMovie = () => {
    const newRandomMovie =
      this.state.movies[Math.floor(Math.random() * this.state.movies.length)];
    return newRandomMovie.backdrop_path;
  };

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error receiving Data");
        } else {
          return res.json();
        }
      })
      .then((data) => this.setState({ movies: data.movies }))
      .catch((err) => this.setState({ error: "Something happened" }));
  };

  render() {
    return this.state.error ? (
      <h1 className="error-message">
        {" "}
        Sorry, something went wrong! Please try again.{" "}
      </h1>
    ) : !this.state.movies ? (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    ) : (
      <main className="App">
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="header">
                <h1 className="heading">Rancid Tomatillos</h1>
                <img
                  alt="cover image"
                  className="header-image"
                  src={`${this.getHeaderMovie()}`}
                />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Movies
                movies={this.state.movies}
                displayMovieDetails={this.displayMovieDetails}
              />
            );
          }}
        />
        <Route
          exact
          path="/movies/:id"
          render={({ match }) => {
            return <SingleMovie singleMovieID={match.params.id} />;
          }}
        />
      </main>
    );
  }
}

export default App;
