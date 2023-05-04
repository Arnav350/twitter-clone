import React from "react";

interface IProps {
  first: string;
  last: string;
  image: string;
}

function Person(props: IProps) {
  return (
    <div className="person">
      <div className="person__box">
        <img src={props.image} alt="" className="person__image" />
        <div className="person__text">
          <h4 className="person__display-name">{props.first + props.last}</h4>
          <p className="person__username">@{props.first}</p>
        </div>
      </div>
      <button className="person__follow">Follow</button>
    </div>
  );
}

export default Person;
