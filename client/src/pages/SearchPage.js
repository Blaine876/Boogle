import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import useGoogleSearch from "../hooks/useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import { Search } from "../components";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./SearchPage.css";

function SearchPage() {
  const googleLogo =
    "https://boogle-battleofthebooks.weebly.com/uploads/2/6/0/8/26083305/7611755_orig.png";

  const { term } = useContext(SearchContext);

  // LIVE API CALL
  //const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src={googleLogo} />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/images">Maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/images">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
        <h1>{term}</h1>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
