import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Movies from './Movies';
import { Routes, Route} from 'react-router-dom';
import MovieDetails from './MovieDetails';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState(Movies);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div>
      <AddMovie onAddMovie={addMovie} />
      <br></br>

        <Routes>
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
          <Route path="/" element={<MovieList movies={movies} />} />
        </Routes>
    </div>
  );
};

export default App;
