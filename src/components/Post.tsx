import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

interface IProps {
  avatar: string;
  displayName: string;
  blue: boolean;
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
          {props.blue && <BsPatchCheckFill className="post__blue" />}
          <h4 className="post__username">@{props.username}</h4>
        </div>
        <p className="post__text">{props.text}</p>
        {props.image && <img src={props.image} alt="" className="post__img" />}
      </div>
    </div>
  );
}

export default Post;
