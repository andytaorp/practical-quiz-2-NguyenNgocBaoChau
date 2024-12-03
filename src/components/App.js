import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    const newMovie = {
      id: Date.now(),
      title,
      watched: false,
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleToggleWatched = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleDeleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const appStyle = {
    backgroundColor: "#6a1b9a",
    color: "white",
    fontFamily: "Poppins, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    padding: "20px",
  };

  const headerStyle = {
    textAlign: "center",
    fontSize: "3rem", // Larger font size
    marginBottom: "20px",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <div style={appStyle}>
      <h1 style={headerStyle}>Favorite Movies</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList
        movies={movies}
        onToggleWatched={handleToggleWatched}
        onDeleteMovie={handleDeleteMovie}
      />
    </div>
  );
}

export default App;
