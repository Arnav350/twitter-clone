import React from "react";
import {
  BsPatchCheckFill,
  BsChat,
  BsArrowRepeat,
  BsHeart,
  BsUpload,
} from "react-icons/bs";
import "../App.css";

interface IProps {
  avatar: string;
  displayName: string;
  verified: boolean;
  username: string;
  text: string;
  image?: string;
}

function Post(props: IProps) {
  return (
    <div className="post">
      <img src={props.avatar} alt="" className="post__avatar" />
      <div className="post__body">
        <div className="post__user">
          <h3 className="post__display-name">{props.displayName}</h3>
          {props.verified && <BsPatchCheckFill className="post__verified" />}
          <h4 className="post__username">@{props.username}</h4>
        </div>
        <p className="post__text">{props.text}</p>
        {props.image && (
          <img src={props.image} alt="" className="post__image" />
        )}
        <div className="post__icons">
          <div className="post__blue">
            <BsChat className="post__icon " />
          </div>
          <div className="post__green">
            <BsArrowRepeat className="post__icon" />
          </div>
          <div className="post__red">
            <BsHeart className="post__icon" />
          </div>
          <div className="post__blue">
            <BsUpload className="post__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
