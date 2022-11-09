import React, { useContext } from "react";
import "./search.css";

import { AudioConext } from "../../store";

const Search = () => {
  const { searchItem } = useContext(AudioConext);
  return (
    <div className="max-width">
      <div className="search-title">My Books</div>
      <input
        className="search-input"
        placeholder="Serch Book & Authors"
        onChange={(e) => searchItem(e.target.value)}
      />
    </div>
  );
};

export default Search;
