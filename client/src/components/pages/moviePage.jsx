import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useGetAllMoviesQuery } from "../../../slices/api";
import { useGetAllGenresQuery } from "../../../slices/api";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";

function MoviesPage() {
  const { isLoading: loadingMovies, error: movieError } =
    useGetAllMoviesQuery();
  const { isLoading: loadingGenres, error: genreError } =
    useGetAllGenresQuery();
  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.genres);
  const [genresArray, setGenreArray] = useState([]);
  const navigate = useNavigate();

  if (loadingMovies || loadingGenres) {
    return <p>Loading...</p>;
  }
  if (movieError || genreError) {
    console.error("Error loading movies:", movieError || genreError);
    return <div>Error loading movies. Please try again later.</div>;
  }
  //   useEffect(() => {
  //     if (Array.isArray(genres) && genres.length > 0) {
  //       const genreNames = genres.map((genre) => genre.name);
  //       setGenreArray(genreNames);
  //     }
  //     [genres];
  //   });
  console.log(genresArray);

  const options = [
    "Action",
    "Anime",
    "Classics",
    "Comedy",
    "Crime",
    "Cult",
    "Documentaries",
    "Drama",
    "Fantasy",
    "Faith & Spirituality",
    "Holidays",
    "Horror",
    "International",
    "Music & Musicals",
    "Romance / RomCom",
    "Stand - up",
    "Thriller",
    "Sci - Fi",
  ];

  //   const handleAction = () => {
  //     navigate("/single_movie_page");
  //   };

  return (
    <>
      <section id="genre_selection_menu">
        <Autocomplete
          style={{
            backgroundColor: "darkgrey",
            width: "100px",
            border: "solid 4px darkgrey",
            paddingTop: "2px",
          }}
          disablePortal
          options={options}
          sx={{ width: 100 }}
          renderInput={(params) => <TextField {...params} label="Genres" />}
        />
        ;
      </section>
      <section id={"movies_section"}>
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="movie_div" key={movie.id}>
              <img src={movie.img} alt={movie.name} />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
export default MoviesPage;
