import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { Search } from "../components";
import "./Home.css";

function Home() {
  const googleLogo =
    "https://boogle-battleofthebooks.weebly.com/uploads/2/6/0/8/26083305/7611755_orig.png";

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Bmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar src="" alt="avatar" />
        </div>
      </div>

      <div className="home__body">
        <img src={googleLogo} alt="logo" />

        <div className="home__searchInputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
