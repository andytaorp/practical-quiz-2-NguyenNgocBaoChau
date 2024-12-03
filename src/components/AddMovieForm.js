import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddMovie(title);
    setTitle("");
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    width: "80%", 
    maxWidth: "600px", 
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "1.2rem",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    width: "100%", 
    maxWidth: "500px", 
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#ab47bc", 
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s",
    width: "100%", 
    maxWidth: "500px", 
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
