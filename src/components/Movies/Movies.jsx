import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movie from "./Movie";

const searchMovies = gql`
  query Movies($searchValue: String!) {
    movies(searchValue: $searchValue) {
      title
      id
      poster
      year
    }
  }
`;

const Movies = ({ searchValue }) => {
  const { loading, error, data } = useQuery(searchMovies, {
    variables: { searchValue },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p style={{ color: "red" }}>ERROR</p>;

  if (data.movies.length === 0)
    return <p style={{ color: "red" }}>Movies for {searchValue} not found</p>;

  return (
    <div className="movies">
      {data.movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
