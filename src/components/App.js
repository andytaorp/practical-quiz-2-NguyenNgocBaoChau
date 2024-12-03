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

  // Inline style for the app
  const appStyle = {
    backgroundColor: "#6a1b9a", // Purple background
    color: "white", // White text
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headerStyle = {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#ab47bc", // Light purple
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#8e24aa", // Darker purple on hover
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
