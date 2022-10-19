import React, { Component } from "react";
import Card from "../Card/Card";
import dayjs from "dayjs";
import { render } from "@testing-library/react";
import "./SingleMovie.css"

const SingleMovie = ({ singleMovie, goHome }) => {
  return !singleMovie ? <div className='spinner-container'>
    <div className='loading-spinner'>
    </div>
  </div> : (
    <div>
      <Card
        title={singleMovie.title}
        tagline={singleMovie.tagline}
        backdrop_path={singleMovie.backdrop_path}
        // video={video}
        overview={singleMovie.overview}
        average_rating={singleMovie.average_rating}
        release_date={dayjs(singleMovie.release_date).format("MM/DD/YYYY")}
        genres={singleMovie.genres}
        runtime={singleMovie.runtime}
        key={singleMovie.id}
        goHome={goHome}
      />
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
