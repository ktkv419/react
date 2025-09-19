import { useState } from 'react'
import './App.css'
import Movie from './components/Movie/Movie'
import { genres } from './utils/genres'

function App() {
  const [movie, setMovie] = useState("")
  const [score, setScore] = useState(2)
  const [movies, setMovies] = useState([])
  const [desc, setDesc] = useState("")
  const [genre, setGenre] = useState(Object.entries(genres)[0][0])


  const handleAdd = (e) => {
    e.preventDefault()
    const newMovie = {
      id: crypto.randomUUID(),
      name: movie,
      score,
      genre,
      desc
    }
    setMovies((oldValue) => [newMovie, ...oldValue])
    setMovie("")
    setScore(2)
    setDesc("")
  }

  return (
    <div className="app">
      <h1>Movie DB</h1>
      <form onSubmit={handleAdd} action="" className="movie-form">
        <input type="text" onChange={(value) => setMovie(value.target.value)} value={movie}/>
        <input type="range" min={0} max={4}  value={score} onChange={(v) => setScore(v.target.value)}/>
        {+score + 1}
        <select>
          {Object.entries(genres).map((genre) => (
            <option value={genre[0]}>{genre[1]}</option>
          ))}
        </select>
        <textarea value={desc} onChange={(value) => setDesc(value.target.value)}></textarea>
        <button className="add-movie">Добавить</button>
      </form>
      <div className="movie-list">
        {movies.map((el) => (
          <Movie key={el.id} {...el} />
        ))}
      </div>
    </div>
  )
}

export default App
