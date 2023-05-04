import React from "react";

interface IProps {
  reply: string;
}

function ReplyBox(props: IProps) {
  return (
    <div className="reply">
      <p className="reply__top">Reply to @arnavpatel</p>
      <p className="reply__text">{props.reply}</p>
    </div>
  );
}

export default ReplyBox;
