import React from 'react'
import Card from '../Card/Card'

const SingleMovie = ( { movies }, id ) => {
    const findMovie = movies.find(movie => {
        if (movie.id === id) {
            return (
                <Card
                title={movie.title}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                average_rating={movie.average_rating}
                release_date={movie.release_date}
                key={movie.id}
                // onClick={() => goHome()}
                />
            )
        }
    })
    return (
        <div>
            {findMovie}
        </div>
    )
}

export default SingleMovie