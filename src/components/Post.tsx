import React, { useState } from "react";
import { db } from "../firebase";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import {
  BsPatchCheckFill,
  BsChat,
  BsChatFill,
  BsHeart,
  BsHeartFill,
  BsPencilSquare,
  BsCheckLg,
  BsTrash,
} from "react-icons/bs";
import "../App.css";
import Reply from "./Reply";

interface IProps {
  id: string;
  avatar: string;
  text?: string;
  image?: string;
  replies: string[];
  liked: boolean;
}

function Post(props: IProps) {
  const [editable, setEditable] = useState<boolean>(false);
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const [text, setText] = useState<string>(props.text || "");
  const [reply, setReply] = useState<string>("");

  async function toggleLike() {
    await updateDoc(doc(db, "posts", props.id), {
      liked: !props.liked,
    });
  }

  async function editMessage() {
    setEditable(!editable);

    if (editable && text !== (props.text || "")) {
      await updateDoc(doc(db, "posts", props.id), {
        text,
      });
    }
  }

  async function addReply() {
    props.replies.unshift(reply);

    setReply("");

    await updateDoc(doc(db, "posts", props.id), {
      replies: props.replies,
    });
  }

  return (
    <div className="post">
      <img src={props.avatar} alt="" className="post__avatar" />
      <div className="post__body">
        <div className="post__user">
          <h3 className="post__display-name">Arnav</h3>
          <BsPatchCheckFill className="post__verified" />
          <h4 className="post__username">@arnavpatel</h4>
        </div>
        {editable ? (
          <input
            type="text"
            value={text}
            className="post__edit"
            onChange={(event) => setText(event.target.value)}
          />
        ) : (
          <p className="post__text">{props?.text}</p>
        )}
        {props.image && (
          <img src={props.image} alt="" className="post__image" />
        )}
        <div className="post__icons">
          <button
            className="post__blue"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? (
              <BsChatFill className="post__chat post__icon" />
            ) : (
              <BsChat className="post__icon " />
            )}
          </button>
          <button className="post__red" onClick={toggleLike}>
            {props.liked ? (
              <BsHeartFill className="post__heart post__icon" />
            ) : (
              <BsHeart className="post__icon" />
            )}
          </button>
          <button
            className={editable ? "post__green" : "post__orange"}
            onClick={editMessage}
          >
            {editable ? (
              <BsCheckLg className="post__check post__icon" />
            ) : (
              <BsPencilSquare className="post__icon" />
            )}
          </button>
          <button
            className="post__red"
            onClick={async () => await deleteDoc(doc(db, "posts", props.id))}
          >
            <BsTrash className="post__icon" />
          </button>
        </div>
        {showReplies && (
          <div>
            <div className="post__reply">
              <input
                type="text"
                value={reply}
                placeholder="Tweet your reply"
                className="post__input"
                onChange={(event) => setReply(event.target.value)}
              />
              <button className="post__tweet" onClick={addReply}>
                Reply
              </button>
            </div>
            {props.replies.map((reply: string, index: number) => (
              <Reply key={index} reply={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
