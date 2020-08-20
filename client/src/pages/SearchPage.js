import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

import "./SearchPage.css";

function SearchPage() {
  const { term } = useContext(SearchContext);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
