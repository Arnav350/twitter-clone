import React from "react";
import SidebarBox from "./SidebarBox";
import {
  BsTwitter,
  BsHouse,
  BsHash,
  BsBell,
  BsEnvelope,
  BsBookmark,
  BsPatchCheck,
  BsPerson,
  BsThreeDots,
  BsFillHouseFill,
  BsFillBellFill,
  BsEnvelopeFill,
  BsFillBookmarkFill,
  BsPatchCheckFill,
  BsPersonFill,
  BsPlusCircleFill,
} from "react-icons/bs";
import "../App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <BsTwitter className="sidebar__twitter" />
      </div>
      <nav className="sidebar__nav">
        <SidebarBox
          current
          element={BsHouse}
          secondary={BsFillHouseFill}
          text="Home"
        />
        <SidebarBox element={BsHash} secondary={BsHash} text="Explore" />
        <SidebarBox
          element={BsBell}
          secondary={BsFillBellFill}
          text="Notifications"
        />
        <SidebarBox
          element={BsEnvelope}
          secondary={BsEnvelopeFill}
          text="Messages"
        />
        <SidebarBox
          element={BsBookmark}
          secondary={BsFillBookmarkFill}
          text="Bookmarks"
        />
        <SidebarBox
          element={BsPatchCheck}
          secondary={BsPatchCheckFill}
          text="Twitter Blue"
        />
        <SidebarBox
          element={BsPerson}
          secondary={BsPersonFill}
          text="Profile"
        />
        <SidebarBox element={BsThreeDots} secondary={BsThreeDots} text="More" />
        <button className="sidebar__tweet">Tweet</button>
        <BsPlusCircleFill className="sidebar__plus" />
      </nav>
    </div>
  );
}

export default Sidebar;
