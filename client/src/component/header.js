import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render = () => {
    return (
      <div className="ui secondary pointing menu">
        <Link className="item" to="/">
          Streamer's
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  };
}

export default Header;
