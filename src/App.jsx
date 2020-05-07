import React from "react";
import Movies from "./pages/movies";
import MoviesPage from "./pages/artist";
import Header from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header text="HOOKED" />

      <Movies />
      <MoviesPage />
    </div>
  );
};

export default App;

// Build a Movie-Search App Using React (With Hooks) and apollo graphql client
// https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

// https://medium.com/better-programming/9-projects-you-can-do-to-become-a-front-end-master-in-2020-97577110cca1
