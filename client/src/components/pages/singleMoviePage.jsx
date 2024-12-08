import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleMoviePage() {
  const movies = useSelector((state) => state.movies);
  const params = useParams();
  const selectedMovie = movies.find((i) => i.id === Number(params.id));

  if (!selectedMovie) {
    return <p>Loading or Movie not found...</p>;
  }
  return (
    <>
      <div>
        <div id="selected_movie">
          <img
            className="movie_img"
            alt={selectedMovie.name}
            src={selectedMovie.img}
          />
          <h1>{selectedMovie.name}</h1>
          <p>{selectedMovie.description}</p>
          <p>
            Genres:{" "}
            {selectedMovie.genres && selectedMovie.genres.length > 0
              ? selectedMovie.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < selectedMovie.genres.length - 1 ? ", " : ""}
                  </span>
                ))
              : "No genres available"}
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleMoviePage;
