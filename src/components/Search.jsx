import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    search(searchValue);
    setSearchValue("");
  };

  return (
    <form className="search">
      <input type="text" value={searchValue} onChange={handleOnChange} />
      <input type="submit" onClick={handleOnSubmit} vakye="SEARCH" />
    </form>
  );
};

export default Search;
