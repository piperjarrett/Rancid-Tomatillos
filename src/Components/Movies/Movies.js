import React from 'react'
import './Movies.css'
import Card from '../Card/Card'

const Movies = ( { movies } ) => {
    console.log(movies)
    const movieCards = movies.movieData.movies.map(movie => {
        return (
            <Card 
                poster_path={movie.poster_path}
                key={movie.id}
                // onClick={() => findSingleMovie(id)}
            />
        )
    })
    return (
        <div className='movie-container'>
            {movieCards}
        </div>
    )
}

export default Movies