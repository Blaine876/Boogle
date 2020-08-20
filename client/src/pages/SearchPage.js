import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import useGoogleSearch from "../hooks/useGoogleSearch";

import "./SearchPage.css";

function SearchPage() {
  const { term } = useContext(SearchContext);
  const { data } = useGoogleSearch(term);

  console.log(data);
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
