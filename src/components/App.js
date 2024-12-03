
import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  // TODO: Implement adding a new movie to the list
  const handleAddMovie = (title) => {
    const newMovie = {
      id: Date.now(), 
      title,
      watched: false,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  // TODO: Implement toggling a movie's watched status
  const handleToggleWatched = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  // TODO: Implement deleting a movie from the list
  const handleDeleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */}
      <AddMovieForm onAddMovie={handleAddMovie} />
      {/* TODO: Add MovieList Component */}
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
