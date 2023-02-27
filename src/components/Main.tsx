import React from "react";
import Post from "./Post";
import {
  RiImage2Line,
  RiFileGifLine,
  RiListUnordered,
  RiEmotionHappyLine,
  RiCalendarEventLine,
  RiMapPinLine,
} from "react-icons/ri";

function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__top">
          <h2 className="main__title">Home</h2>
          <div className="main__options">
            <h3 className="main__option">For you</h3>
            <h3 className="main__option">Following</h3>
          </div>
        </div>
        <div className="main__box">
          <div className="main__personal">
            <img src="" alt="" className="main__avatar" />
            <input
              type="text"
              placeholder="What's happening?"
              className="main__input"
            />
          </div>
          <div className="main__buttons">
            <div className="main__links">
              <a href="/" className="main__link">
                <RiImage2Line className="main__icon" />
              </a>
              <a href="/" className="main__link">
                <RiFileGifLine className="main__icon" />
              </a>
              <a href="/" className="main__link">
                <RiListUnordered className="main__icon" />
              </a>
              <a href="/" className="main__link">
                <RiEmotionHappyLine className="main__icon" />
              </a>
              <a href="/" className="main__link">
                <RiCalendarEventLine className="main__icon" />
              </a>
              <a href="/" className="main__link">
                <RiMapPinLine className="main__icon" />
              </a>
            </div>
            <button className="main__tweet">Tweet</button>
          </div>
        </div>
      </div>
      <Post
        avatar="avt"
        displayName="TechCrunch"
        blue
        username="uname"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perspiciatis ipsa dolores? Porro similique ipsa veritatis recusandae aspernatur!"
        image="image"
      />
    </div>
  );
}

export default Main;
