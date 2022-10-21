import React, { Component } from "react";
import dayjs from "dayjs";
import { render } from "@testing-library/react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      singleMovie: null,
      trailers: [],
      error: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}/videos`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error receiving Data");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        this.setState({ trailers: data.videos });
      })
      .catch((error) => this.setState({ error: error.message }));
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.singleMovieID}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error receiving Data");
        } else {
          return res.json();
        }
      })
      .then((res) => this.setState({ singleMovie: res.movie }))
      .catch((error) => this.setState({ error: error.message }));
  }

  trailerSlides = () => {
    let trailerSlides = this.state.trailers.map((video) => {
      return (
        <SwiperSlide className="swiper-slide" key={video.id}>
          <ReactPlayer
            className="video"
            controls={true}
            url={`https://www.youtube.com/watch?v=${video.key}`}
          />
        </SwiperSlide>
      );
    });
    return trailerSlides;
  };

  render() {
    const getMovieGenre = (singleMovie) => {
      if (singleMovie.genres) {
        return singleMovie.genres
          .slice(0, singleMovie.genres.length)
          .join(", ");
      } else {
        return "Unknown Genre";
      }
    };

    return this.state.error ? (
      <h1 className="single-error-message">
        {" "}
        Sorry, something went wrong! Please go back to the main page.{" "}
      </h1>
    ) : !this.state.singleMovie ? (
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    ) : (
      <div>
        <div className="card" id={this.state.singleMovie.id}>
          <div
            className="movie-details"
            style={{
              backgroundImage: `url(${this.state.singleMovie.backdrop_path})`,
              backgroundSize: "cover",
            }}
          >
            <div className="back-arrow">
              <Link exact to="/" className="nav">
                <button
                  className="home-button"
                  onClick={() => this.props.goHome()}
                >
                  ✖️
                </button>
              </Link>
            </div>
            <h1 className="movie-title">{this.state.singleMovie.title}</h1>
            <div className="movie-details-box">
              <p className="tagline">{this.state.singleMovie.tagline}</p>
              <p className="overview">{this.state.singleMovie.overview}</p>
              <p className="rating">
                🍅 Rating: {this.state.singleMovie.average_rating.toFixed(2)}
              </p>
              <p className="release-date">
                Release Date:
                {dayjs(this.state.singleMovie.release_date).format(
                  "MM/DD/YYYY"
                )}
              </p>
              <p className="genre">
                Genre: {`${getMovieGenre(this.state.singleMovie)}`}
              </p>
              <p className="runtime">
                Runtime: {this.state.singleMovie.runtime} Minutes
              </p>
            </div>
          </div>
          <section className="movie-trailer">
            <div className="movie-trailer-info">
              <Swiper
                modules={[Navigation, Mousewheel, Keyboard]}
                slidesPerView={1}
                navigation={true}
                keyboard={true}
                mousewheel={true}
                className="all-swiper-movies"
              >
                {this.trailerSlides()}
              </Swiper>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SingleMovie;
