import React from "react";
import {
  RiArrowDownSLine,
  RiEarthFill,
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
        <h2 className="main__title">Home</h2>
        <div className="main__options">
          <div className="main__option">For you</div>
          <div className="main__option">Following</div>
        </div>
        <div className="main__box">
          <p>
            Everyone <RiArrowDownSLine />
          </p>
          <input type="text" placeholder="What's happening?" />
          <p>
            <RiEarthFill /> Everyone can reply
          </p>
          <div>
            <div>
              <a href="">
                <RiImage2Line />
              </a>
              <a href="">
                <RiFileGifLine />
              </a>
              <a href="">
                <RiListUnordered />
              </a>
              <a href="">
                <RiEmotionHappyLine />
              </a>
              <a href="">
                <RiCalendarEventLine />
              </a>
              <a href="">
                <RiMapPinLine />
              </a>
            </div>
            <button>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
