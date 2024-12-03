import React from "react";

export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {
  const movieStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    padding: "15px", 
    backgroundColor: "#9c4dcc",
    borderRadius: "10px",
    width: "80%", 
    maxWidth: "500px", 
  };

  const titleStyle = {
    textDecoration: movie.watched ? "line-through" : "none",
    color: "white", 
  };

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "#8e24aa",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <li style={movieStyle}>
      <span style={titleStyle}>{movie.title}</span>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <button style={buttonStyle} onClick={() => onDeleteMovie(movie.id)}>
        Delete
      </button>
    </li>
  );
}
