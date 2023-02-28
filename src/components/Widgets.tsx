import React from "react";
import { BsSearch, BsPatchCheckFill } from "react-icons/bs";
import "../App.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <BsSearch className="widgets__icon" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="widgets__input"
        />
      </div>
      <div className="widgets__box">
        <h1 className="widgets__title">What's happening</h1>
      </div>
      <div className="widgets__box">
        <h1 className="widgets__title">Who to follow</h1>
      </div>
    </div>
  );
}

export default Widgets;
