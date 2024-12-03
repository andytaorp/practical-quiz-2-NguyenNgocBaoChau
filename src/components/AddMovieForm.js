import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: write code to handle form submission
    if (!title.trim()) return;
    onAddMovie(title); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie!</button>
    </form>
  );
}
