import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent adding an empty movie or a movie with only spaces
    if (!title.trim()) return;
    onAddMovie(title); // Pass the title back to the parent component
    setTitle(""); // Clear input after submission
  };

  // Inline styles for the form elements
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1rem",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
    width: "300px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#ab47bc", // Lighter purple
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Add Movie
      </button>
    </form>
  );
}
