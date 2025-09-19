import { useEffect } from 'react'
import './Movie.css'

const Movie = ({name, genre, score, desc}) => {
    return (
        <div className="movie">
            <h4>{name}</h4>
            <p>{desc}</p>
            <p>{genre}</p>
            <div className="movie__score">
                {Array(5).fill().map((_, i) => score < i ? "☆" : "★")}
            </div>
        </div>
    )
}

export default Movie