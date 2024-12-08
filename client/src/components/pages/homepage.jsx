import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../../slices/api";
import { useSelector } from "react-redux";

function Homepage() {
  const { isLoading, data: movieData, error } = useGetAllMoviesQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error("Error loading movies:", error);
    return <div>Error loading movies. Please try again later.</div>;
  }

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchValue(query);
    if (movieData) {
      const results = movieData.filter((movie) =>
        movie.name.toLowerCase().includes(query)
      );
      setFilteredMovies(results);
    }
  };

  return (
    <>
      <div id="movies_section">
        <div id="search_bar_div">
          <input
            type="text"
            value={searchValue}
            placeholder="Search for movies to appear..."
            onChange={handleSearch}
            className="search_bar"
            style={{ width: "200px" }}
          />
        </div>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <div className="movie_div">
                <img src={movie.img} alt={movie.name} />
              </div>
            </Link>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
}

export default Homepage;
