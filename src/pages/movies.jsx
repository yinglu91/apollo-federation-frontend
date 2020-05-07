import React, { useState } from "react";
import Movies from "../components/Movies/Movies";
import Search from "../components/Search";

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useState("man");

  const search = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <Movies searchValue={searchValue} />
    </>
  );
};

export default MoviesPage;

// Build a Movie-Search App Using React (With Hooks)
// https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

// https://medium.com/better-programming/9-projects-you-can-do-to-become-a-front-end-master-in-2020-97577110cca1
