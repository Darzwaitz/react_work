import Hero from "./Hero";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  //   const { id } = useParams();
  //   console.log(id);
  console.log("tesht");

  //   const [movieDetails, setMovieDetails] = useState({});

  //   useEffect(() => {
  //     console.log("make api request");
  //   }, [id]);

  return (
    <div>
      <Hero text="Movie detail view" />
      <MovieCard />
    </div>
  );
};

export default MovieView;
