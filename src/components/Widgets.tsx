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
    </div>
  );
}

export default Widgets;
