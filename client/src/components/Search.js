import React, { useState, useContext } from "react";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

import "./Search.css";

function Search({ hideButtons = false, term }) {
  const [input, setInput] = useState("");
  const { setSearchTerm } = useContext(SearchContext);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      return;
    } else {
      setSearchTerm(input);
      history.push("/search");
    }
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={term}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Boogle Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Boogle Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
