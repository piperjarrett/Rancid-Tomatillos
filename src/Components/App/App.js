import './App.css';
import React, { Component } from 'react'
import movieData from '../Movies/movieData'
import Movies from '../Movies/Movies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: { movieData },
      randomMovie: ''
    }
  }

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
        {/* <Header 
          randomMovie={this.state.randomMovie}
        /> */}
        <Movies 
        movies={this.state.movies}
          // findSingleMovie={this.findSingleMovie}
        />
      </div>
    );
  }
}

export default App;
