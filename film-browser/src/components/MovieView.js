import Hero from "./Hero";
import { ENV_API_KEY } from "../env.vars";

// import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  // console.log(id);

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("make api request", id);

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${ENV_API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text={"Loading..."} />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/originals${movieDetails.poster_path}`;

      return (
        <main>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />

          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt={movieDetails.original_title}
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
