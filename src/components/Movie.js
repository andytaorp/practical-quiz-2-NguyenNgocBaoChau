import React from "react";

//TODO: implement the Movie component
export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <li>
      <span
        style={{ textDecoration: movie.watched ? "line-through" : "none" }}
      >
        {movie.title}
      </span>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </li>
  );
}
